'use strict';

import register from 'react-server-dom-webpack/node-register';
register();
import compression from 'compression';
// require.extensions['.css'] = () => {
//   return;
// };

import express from 'express';
import { readFileSync } from 'fs';
import { pipeToNodeWritable } from 'react-writer';
import path from 'path';
import React from 'react';
import ReactApp from '../src/App.server';

const PORT = 4000;
const app = express();


app.use(compression())
app.use(express.json());

app.use(express.static('build'));
app.use(express.static('public'));


app.listen(PORT, () => {
  console.log('React Notes listening at 4000...');
});

async function renderReactTree(res, props) {
  const manifest = readFileSync(
    path.resolve(__dirname, '../build/react-client-manifest.json'),
    'utf8'
  );
  const moduleMap = JSON.parse(manifest);
  pipeToNodeWritable(React.createElement(ReactApp,props), res, moduleMap);
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

app.get('/react', function (req, res) {
  sendResponse(req, res, null);
});

app.get("/", function(req, res) {
  const html = readFileSync(
    path.resolve(__dirname, '../build/index.html'),
    'utf8'
  );
  res.send(html);
})


app.get("/api/home", (req, res) => {
  res.sendFile(path.resolve(__dirname, '../', 'home_page.json'));
});

app.get("/api/product", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'product_page.json'));
});


app.get('/api/:page/:pgno', (req,res) => {
  const pgno = req.params.pgno;
  const page = req.params.page;
  const wcount = (page === 'home'? 4: 2);
  const data = readFileSync(
    path.resolve(__dirname, `../${page}_page.json`),
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


app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});