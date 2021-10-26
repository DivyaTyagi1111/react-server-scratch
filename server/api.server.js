'use strict';

const register = require('react-server-dom-webpack/node-register');
register();
const babelRegister = require('@babel/register');

babelRegister({
  ignore: [/[\\\/](build|server|node_modules)[\\\/]/],
  presets: [['react-app', {runtime: 'automatic'}]],
  plugins: ['@babel/transform-modules-commonjs'],
});

const express = require('express');
const compress = require('compression');
import { readFileSync } from 'fs';
const {pipeToNodeWritable} = require('react-server-dom-webpack/writer');
const path = require('path');
const React = require('react');
const ReactApp = require('../src/App.server').default;

const PORT = process.env.PORT || 4000;
const app = express();

app.use(compress());
app.use(express.json());

app
  .listen(PORT, () => {
    console.log(`React Notes listening at ${PORT}...`);
  })
  .on('error', function(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const isPipe = (portOrPipe) => Number.isNaN(portOrPipe);
    const bind = isPipe(PORT) ? 'Pipe ' + PORT : 'Port ' + PORT;
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  });

function handleErrors(fn) {
  return async function(req, res, next) {
    try {
      return await fn(req, res);
    } catch (x) {
      next(x);
    }
  };
}

app.get(
  '/',
  handleErrors(async function(_req, res) {
    await waitForWebpack();
    const html = readFileSync(
      path.resolve(__dirname, '../build/index.html'),
      'utf8'
    );
    // Note: this is sending an empty HTML shell, like a client-side-only app.
    // However, the intended solution (which isn't built out yet) is to read
    // from the Server endpoint and turn its response into an HTML stream.
    res.send(html);
  })
);

async function renderReactTree(res, props) {
  await waitForWebpack();
  const manifest = readFileSync(
    path.resolve(__dirname, '../build/react-client-manifest.json'),
    'utf8'
  );
  const moduleMap = JSON.parse(manifest);
  pipeToNodeWritable(React.createElement(ReactApp, props), res, moduleMap);
}

function sendResponse(req, res, redirectToId) {
  const location = JSON.parse(req.query.location);
  if (redirectToId) {
    location.selectedId = redirectToId;
  }
  res.set('X-Location', JSON.stringify(location));
  renderReactTree(res, {
    selectedId: location.selectedId,
    page: location.page,
    pageNo: location.pageNo
  });
}

app.get('/react', function(req, res) {
  sendResponse(req, res, null);
});

app.get('/api/:page/:pgno', (req,res) => {
  const pgno = req.params.pgno;
  const page = req.params.page;
  const wcount = (page === 'home'? 4: 2);
  const data = readFileSync(
    path.resolve(__dirname, `${page}_page.json`),
    'utf8'
  );
  
    let slots = [];
    const temp = JSON.parse(data);
    const slotsFromJson = temp['RESPONSE']['slots'];
    let priceData = {};
    if(temp['RESPONSE']['pageData'])priceData = temp['RESPONSE']['pageData']['pageContext'];
    const start = (pgno-1)*wcount;
    const end = Math.min(start+wcount,slotsFromJson.length)-1;
    const hasMorePages = (end < slotsFromJson.length-1);
    for (let i = start; i <= end; i++) {
      slots.push(slotsFromJson[i]);
    }
    const pageResponse = {
      "slots":slots,
      "priceData":priceData,
      "pageNumber":pgno,
      "hasMorePages":hasMorePages
    }
    // console.log(pageData);
    res.send(pageResponse);
}); 

app.use(express.static('build'));
app.use(express.static('public'));

app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, 'build/', 'index.html'));
})

async function waitForWebpack() {
  while (true) {
    try {
      readFileSync(path.resolve(__dirname, '../build/index.html'));
      return;
    } catch (err) {
      console.log(
        'Could not find webpack build output. Will retry in a second...'
      );
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}
