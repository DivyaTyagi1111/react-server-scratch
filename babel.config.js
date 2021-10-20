module.exports = {
    ignore: [/\/(build|server|node_modules)\//],
    presets: [['react-app', { runtime: 'automatic' }]],
  //   "presets": [
  //     "@babel/preset-env",
  //     "@babel/preset-react"
  // ],
    plugins: [
      '@babel/transform-modules-commonjs', 
      "@babel/plugin-proposal-class-properties"
      // 'css-modules-transform'
      // ['css-modules-transform',{
      //   "extensions":['.css'],
      //   "keepImport":true
      // }],
    ]
}

