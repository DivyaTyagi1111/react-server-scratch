module.exports = {
    ignore: [/\/(build|server|node_modules)\//],
    presets: [['react-app', { runtime: 'automatic' }]],

    plugins: [
      '@babel/transform-modules-commonjs', 
    ]
}

