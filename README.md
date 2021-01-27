![Freedesktop Logo](https://i.postimg.cc/vmG0VBKX/freedesktop-logo.png)

## Stremio Mpris
Mpris dbus support for [stremio](https://stremio.com).
Now you can see what is playing in stremio from external programs (like playerctl!)

### Installation & Usage
`git clone` the repo someplace (dont forget `npm install`), and run `npm run server` to start it (Nodejs + Npm needed),
Copy the address shown (localhost...) and paste it into stremio's **addon** searchbar & hit enter.
It should be possible to run the server on startup.

An example .desktop file is stored on the repo. **MODIFY**
