import {Store, Module, ActionContext} from 'vuex';
import {AppState} from './store';


export declare interface PageNavigationState {
  pageStack: Array<any>;
}

export type PageNavigation = Module<PageNavigationState, AppState>;

// Store
export default < Module<PageNavigationState, AppState> > {
  namespaced: true,
  state: {
    pageStack: [],
  },
  actions: {
    pushPage({commit}: ActionContext<PageNavigationState, AppState>, page: any){ commit('PUSHPAGE', page); },
  },
  mutations: {
    ['PUSHPAGE'] (state: PageNavigationState, page: any) {
      state.pageStack.push(page);
    }
  },
};
