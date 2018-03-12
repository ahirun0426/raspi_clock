import {Store, Module, ActionContext} from 'vuex';
import {AppState} from './store';

export declare interface SideMenuState {
  menuItems: Array<any>;
  openSide: boolean;
}

// Store
export default < Module<SideMenuState, AppState> >{
  namespaced: true,
  state: {
    menuItems: [],
    openSide: false
  },
  actions: {
    openSideMenu  ({commit}: ActionContext<SideMenuState, AppState>){ commit('OPENSIDE', true); },
    closeSideMenu ({commit}: ActionContext<SideMenuState, AppState>){ commit('OPENSIDE', false); },
    addMenuItem   ({commit}: ActionContext<SideMenuState, AppState>, menuItem:any){ commit('ADD_MENUITEM', menuItem); },
  },
  mutations: {
    ['OPENSIDE'] (state:SideMenuState, bOpen:boolean) {
      state.openSide = bOpen;
    },
    ['ADD_MENUITEM'] (state:SideMenuState, menuItem:any) {
      state.menuItems.push(menuItem);
    }
  },
};
