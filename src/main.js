import Vue from 'nativescript-vue'
import App from './components/App'
import Offline from './components/Offline'
import store from './store'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

const connectivity = require("connectivity");

const connectionType = connectivity.getConnectionType();
  switch (connectionType) {
      case connectivity.connectionType.none:
          new Vue({
            store,
            render: h => h('frame', [h(Offline)])
          }).$start()
        break;
      default:
        new Vue({
          store,
          render: h => h('frame', [h(App)])
        }).$start()
      break;
}
