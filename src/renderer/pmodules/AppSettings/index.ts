import {Store, Module} from 'vuex';

//=============================================================================
// Type definitions
//-----------------------------------------------------------------------------
export declare interface AppSettingsState {
  id?:    string;
  forms:  Array<AppForm>;
  item?:  any;
}

export declare interface AppForm {
  id:             string;
  title:          string;
  style:          'text' | 'checkbox' | 'header1' | 'button' | 'button_dateTime' | 'input_with_button';
  onChange?:      ()=>void;
  onClick?:       ()=>void;
  default_value?: any;
}

//=============================================================================
// Store implementation
//-----------------------------------------------------------------------------
export default < Module<AppSettingsState, any> > {
  namespaced: true,
  state: {
    id:     undefined,
    forms:  new Array<AppForm>(),
    item:   undefined
  },

  getters: {
    forms(state) { return state.forms; },
    item(state) { return state.item; }
  },

  actions: {
    initialize({commit}, id) { commit('SET_ID', id); },

    setForms({commit, dispatch, getters}, forms) {
      commit('SET_FORMS', forms);

      if( !getters.item ){
        dispatch('_setDefaultValue');
      }
    },

    // Set item and store the data into localStorage
    setItem({state, dispatch, commit}, item) {
      commit('SET_ITEM', item);
      dispatch('AppSettings_UpdateItem', item, {root: true});
      window.localStorage.setItem( "AppSetting:" + state.id, JSON.stringify(state));
    },
    resetItem({commit, dispatch, getters}) {
      dispatch('_setDefaultValue');
    },
    retrieveItem({state, commit}) {
      const strSetting = window.localStorage.getItem("AppSetting:" + state.id);
      if( strSetting ){ commit('SET_ITEM', JSON.parse(strSetting).item); }
    },

    _setDefaultValue({dispatch, getters}){
      let item: any = {};
      for( const form of getters.forms ){
        if( form.default_value ){ item[form.id] = form.default_value; }
      }
      dispatch('setItem', item);
    }

  },
  mutations: {
    ['SET_ID'](state, id) { state.id = id; },
    ['SET_FORMS'](state, forms) { state.forms = forms; },
    ['SET_ITEM'](state, item) { state.item = item ? item : {}; },
    ['RESET_ITEM'](state) { state.item = {}; }
  },
};
