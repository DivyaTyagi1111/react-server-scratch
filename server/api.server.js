'use strict';

const register = require('react-server-dom-webpack/node-register');
register();
const babelRegister = require('@babel/register');
const compression = require('compression');
// require.extensions['.css'] = () => {
//   return;
// };

babelRegister({
  ignore: [/\/(build|server|node_modules)\//],
  presets: [['react-app', { runtime: 'automatic' }]],
//   "presets": [
//     "@babel/preset-env",
//     "@babel/preset-react"
// ],
  plugins: [
    '@babel/transform-modules-commonjs', 
    // 'css-modules-transform'
    // ['css-modules-transform',{
    //   "extensions":['.css'],
    //   "keepImport":true
    // }],
  ],
});

const express = require('express');
const { readFileSync } = require('fs');
const { pipeToNodeWritable } = require('react-server-dom-webpack/writer');
const path = require('path');
const React = require('react');
const ReactApp = require('../src/App.server').default;

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

function sendResponse(req, res) {
  const location = JSON.parse(req.query.location);
  res.set('X-Location', JSON.stringify(location));
  renderReactTree(res, {
    page: location.page,
    pageNo: location.pageNo,
    // slot: location.slot,
  });
}

app.get('/react', function (req, res) {
  sendResponse(req, res);
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