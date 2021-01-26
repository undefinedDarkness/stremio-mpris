import { addonBuilder } from "stremio-addon-sdk"
import Player from 'mpris-service'

import { parseMovieRuntime } from './movie-duration.js'
import fetch_metadata from './metadata.js'

/* Addon Manifest */
const manifest = {
  id: 'com.undefinedDarkness.stremio.metadata',
  name: 'Stremio Linux Metadata',
  description: 'Linux Metadata Support For Stremio (MPRIS)',
  catalogs: [],
  version: '1.0.0',
  logo: 'https://i.postimg.cc/vmG0VBKX/freedesktop-logo.png',
  resources: ['subtitles'],
  types: ['movie', 'series']
}

/* Create Addon & Player & Define Subtitle Handler */
const addon = new addonBuilder(manifest);
let player = Player({
  name: 'stremio',
  identity: 'Stremio media player',
  supportedUriSchemes: ['file', 'magnet'],
  supportedInterfaces: ['player']
})

addon.defineSubtitlesHandler(async d => {
  console.log("Called By Stremio!") 
  // IMDB Id
  const id = d.id.split(':')[0];
  const metadata = await fetch_metadata(d, id);
  // const length = parseMovieRuntime(metadata.runtime).getMilliseconds() * 1000 

  // Update plyaer
  let x = {
    // 'mpris:trackid': id,
    // 'mpris:length': length,
    'mpris:artUrl': metadata.background || metadata.poster || metadata.logo || "",
    'xesam:title': metadata.name,
    // 'xesam:contentCreated': metadata.year,
    // 'xesam:userRating': parseFloat(metadata.imdbRating) / 10 || 0
  }
  console.dir(x)
  player.metadata = x
  console.log("Finished Updaing Metadata")
  player.playbackStatus = 'Playing'
  console.log("Set Plalback Status")

  // Empty response
  return Promise.resolve({ subtitles: [] });
})

export default addon.getInterface()
