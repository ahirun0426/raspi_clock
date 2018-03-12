// Store
import Vue from 'vue';
import * as Vuex from 'vuex';
Vue.use(<any>Vuex);

import _PageNavigation from './_PageNavigation';
import _SideMenu from './_SideMenu';

// >>>PERROQUET>>> id:pmodule_store_import
import AppSettings from '../pmodules/AppSettings/';
// <<<PERROQUET<<<

export declare interface AppState {
  APP_NAME: string;
}

export type AppStore = Vuex.Store<AppState>;

export default new Vuex.Store<AppState>({
  state: {
    APP_NAME: "Vue_Perroquet"
  },
  modules: {
    _PageNavigation, _SideMenu,
    // >>>PERROQUET>>> id:pmodule_store
    AppSettings,
    // <<<PERROQUET<<<
  },
  actions: {
    // >>>PERROQUET>>> id:pmodule_store_actions
    AppSettings_UpdateItem({dispatch, state}, value) {}, 
    // <<<PERROQUET<<<
  }
});
