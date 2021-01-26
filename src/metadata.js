// import bent from 'bent'
import fetch from 'node-fetch'

export default async function fetch_metadata(m, imdb_id) {
 
  console.dir(m)

  // Reject Non IMDB Ids
  if (!m.id.startsWith("tt")) {
    throw new Error("Non IMDB Id");
  } else {
    
    // let req = bent('json');
    const req = await fetch(`https://v3-cinemeta.strem.io/meta/${m.type}/${imdb_id}.json`)
    const d = await req.json();
    console.dir(d)
    if (d.meta) {
      return d.meta
    } else {
      throw new Error("Invalid JSON Response.")
    }
  }
}
