//import Interface from './addon.js'
//import { getRouter } from 'stremio-addon-sdk'
const Interface = require('./addon.js')
const {getRouter} = require('stremio-addon-sdk')

module.exports = getRouter(Interface)
//export default getRouter(Interface)
