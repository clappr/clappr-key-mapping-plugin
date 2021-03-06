<!-- [![](https://data.jsdelivr.com/v1/package/npm/@clappr/clappr-key-mapping-plugin/badge)](https://www.jsdelivr.com/package/npm/@clappr/clappr-key-mapping-plugin)
[![](https://img.shields.io/npm/v/@clappr/clappr-key-mapping-plugin.svg?style=flat-square)](https://npmjs.org/package/@clappr/clappr-key-mapping-plugin)
[![](https://img.shields.io/npm/dt/@clappr/clappr-key-mapping-plugin.svg?style=flat-square)](https://npmjs.org/package/@clappr/clappr-key-mapping-plugin)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@clappr/clappr-key-mapping-plugin?style=flat-square)](https://bundlephobia.com/result?p=@clappr/clappr-key-mapping-plugin)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![Travis (.com)](https://img.shields.io/travis/com/joaopaulovieira/clappr-key-mapping-plugin?style=flat-square)
![Coveralls github](https://img.shields.io/coveralls/github/joaopaulovieira/clappr-key-mapping-plugin?style=flat-square)
[![](https://img.shields.io/github/license/joaopaulovieira/clappr-context-menu-plugin?style=flat-square)](https://github.com/joaopaulovieira/clappr-context-menu-plugin/blob/master/LICENSE) -->

<h1 align=center>Clappr key mapping plugin</h1>

## Usage
You can use it from JSDelivr:
```
https://cdn.jsdelivr.net/npm/@clappr/clappr-key-mapping-plugin@latest/dist/clappr-key-mapping-plugin.min.js
```
or as an npm package:
```properties
# Using yarn
yarn add @clappr/clappr-key-mapping-plugin

# Using npm
npm i @clappr/clappr-key-mapping-plugin
```

Then just add the `KeyMappingPlugin` into the list of plugins of your player instance and set the device name on [keyMapping.deviceToMap](https://github.com/clappr/clappr-key-mapping-plugin#devicetomap-string) config:
```javascript
var player = new Clappr.Player({
  source: 'http://your.video/here.mp4',
  plugins: [KeyMappingPlugin],
  keyMapping: { deviceToMap: 'browser' },
});


// Inside your UI{Core, Container}Plugin
get events() {
  return {
    keydown: 'onKeyDown'
  }
}

onKeyDown(event) {
  // Browser.Keys.* will have the appropriate keyCode for the desired device
  switch(event.keyCode) {
  case Clappr.Browser.Keys.VK_ENTER:
    handleEnter()
    break
  case Clappr.Browser.Keys.VK_PLAY:
    handlePlay()
    break
  //...
  }
}
```

## Configuration
The options for the plugin go in the `keyMapping` property as shown below:
```javascript
var player = new Clappr.Player({
  source: 'http://your.video/here.mp4',
  plugins: [KeyMappingPlugin],
  keyMapping: {
    deviceToMap: 'browser',
  },
});
```

### `deviceToMap {String}`
Device to map the keyCodes from. The device name needs to be one on the listed below. If none is provided, `browser` is assumed as the default.

| Name | Device |
|------|--------|
|`browser` | This option is for testing the plugin on a desktop web browser. |
|`samsung_tizen`| Samsung smart TVs with Tizen OS (>= 2015 launch year). |
|`samsung_orsay`| Samsung smart TVs with Orsay OS (<= 2014 launch year). |
|`lg_webos`| LG smart TVs with WebOS (>= 2014 launch year). |
|`panasonic`| Panasonic smart TVs. |

## Development
Install dependencies: `npm install`

Run: `npm start`

Test: `npm test`

Lint: `npm run lint`

Build: `npm run build`

Minified version: `npm run release`
