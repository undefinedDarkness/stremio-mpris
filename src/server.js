//import sdk from 'stremio-addon-sdk'
const { serveHTTP } = require('stremio-addon-sdk')
const Interface = require('./addon.js')

console.log("Starting Addon ⚙️ ")
serveHTTP(Interface, { port: 7000 })
