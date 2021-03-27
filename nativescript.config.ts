import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'com.onegeco.daddy9ja',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig
