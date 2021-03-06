import { Browser, CorePlugin, Log, version } from '@clappr/core'
import { KeyMap } from './keys_mapping/map'

export default class KeyMappingPlugin extends CorePlugin {
  get name() { return 'key_mapping' }

  get supportedVersion() { return { min: version } }

  constructor(core) {
    super(core)
    this.setup()
  }

  setup() {
    delete Browser.Keys

    let deviceName = this.options.keyMapping?.deviceToMap
    if (!deviceName) {
      Log.warn(this.name, 'Device not present in "keyMapping.deviceToMap" option. Defaulting to "browser".')
      deviceName = 'browser'
    }

    const deviceKeyMapping = KeyMap[deviceName]
    if (!deviceKeyMapping) {
      Log.error(this.name, `No mapping rule found for device "${deviceName}"`)
      return
    }

    Browser.Keys = deviceKeyMapping
  }
}
