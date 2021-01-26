import sdk from 'stremio-addon-sdk'
const { serveHTTP } = sdk
import Interface from './addon.js'

console.log("Starting Addon ⚙️ ")
serveHTTP(Interface, { port: 7000 })
