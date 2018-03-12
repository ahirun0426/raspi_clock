<!-- TEMPLATE ==============================================================-->
<template>
  <div class="app-settings">
    <v-ons-row v-for="form in forms" :key="form.id">

      <!-- text -->
      <v-ons-col v-if="form.style === 'text'">
        {{form.title}}
      </v-ons-col>
      <v-ons-col v-if="form.style === 'text'">
        <v-ons-input style="text" :id="form.id" v-model="item[form.id]" />
      </v-ons-col>

      <!-- checkbox -->
      <v-ons-col v-if="form.style === 'checkbox'">
        <Checkbox :id="form.id" v-model="item[form.id]" :title="form.title" :changeHandler="form.onChange" />
      </v-ons-col>

      <!-- header1 -->
      <v-ons-col v-if="form.style === 'header1'" class="header1">
        {{form.title}}
      </v-ons-col>

      <!-- button -->
      <v-ons-col v-if="form.style === 'button'" class="button">
        <v-ons-button @click='form.onClick ? form.onClick() : undefined'>{{form.title}}</v-ons-button>
      </v-ons-col>

      <!-- button_dateTime -->
      <v-ons-col v-if="form.style === 'button_dateTime'" class="button_dateTime">
        <DateTimeInput :title="form.title" type="datetime" :clickHandler="form.onClick" />
      </v-ons-col>

      <!-- input_with_button -->
      <v-ons-col v-if="form.style === 'input_with_button'" class="input_with_button">
        <InputWithButton :id="form.id" :title="form.title" :value="form.default_value" :clickHandler="form.onClick" />
      </v-ons-col>

    </v-ons-row>

    <!-- 更新/初期化 -->
    <v-ons-row>
      <v-ons-col><v-ons-button @click="setItem(item)">更新</v-ons-button></v-ons-col>
      <v-ons-col><v-ons-button @click="resetItem()">初期化</v-ons-button></v-ons-col>
    </v-ons-row>

  </div>
</template>

<!-- SCRIPT ================================================================-->
<script lang="ts">
import Vue, {Component} from 'vue';
import {mapState, mapActions} from 'vuex';
import {AppForm} from './index';

import Checkbox from './Checkbox.vue';
import DateTimeInput from './DateTimeInput.vue';
import InputWithButton from './InputWithButton.vue';

//=============================================================================
// Type definitions
//-----------------------------------------------------------------------------
interface AppSettingsData {
}

interface AppSettingsMethods {
  initialize?:  (id: string)=>void;
  setItem?:     (item: Object)=>void;
  resetItem?:   ()=>void;
}

interface AppSettingsComputed {
  forms?: Array<AppForm>;
  item?:  undefined;
};

interface AppSettingsProps {
  id: string;
};

type AppSettingsObject = Vue & AppSettingsData & AppSettingsMethods & AppSettingsComputed & AppSettingsProps;

//=============================================================================
// Component implementation
//-----------------------------------------------------------------------------
export default <Component<(this:Vue)=>AppSettingsData, AppSettingsMethods, AppSettingsComputed, AppSettingsProps>> {

  props: {id: ''},

  computed: {
    ...mapState('AppSettings', ['forms', 'item']),
  },
  methods: {
    ...mapActions('AppSettings', ['initialize', 'setItem', 'resetItem']),
  },

  mounted(this: AppSettingsObject) {
    (this.initialize) ? this.initialize(this.id) : undefined;
  },

  components: { Checkbox, DateTimeInput, InputWithButton }
}
</script>

<!-- STYLE =================================================================-->
<style scoped>
.header1 {
  margin: 1em;
  font-size: 120%;
  font-weight: bold;
}
</style>
