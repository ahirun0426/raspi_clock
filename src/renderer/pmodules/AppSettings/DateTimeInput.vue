<!-- TEMPLATE ==============================================================-->
<template>
  <div class="grid_container">
    <DatePicker v-model="value" :type="type" />
    <div class="target_input_btn"><v-ons-button @click="onClickHandler">{{title}}</v-ons-button></div>
  </div>
</template>

<!-- SCRIPT ================================================================-->
<script lang="ts">
import Vue, {Component} from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/ja';
import locale from 'element-ui/lib/locale';
import {DatePicker} from "element-ui";

locale.use(<any>lang);

//=============================================================================
// Type definitions
//-----------------------------------------------------------------------------
interface DateTimeInputData {
  value: Date;
}

interface DateTimeInputMethods {
  onClickHandler: ()=>void;
}

interface DateTimeInputComputed {
};

interface DateTimeInputProps {
  title:          string;
  clickHandler:   (date: Date)=>void;
  type:           string;
};

type DateTimeInputObject = Vue & DateTimeInputData & DateTimeInputMethods & DateTimeInputComputed & DateTimeInputProps;

//=============================================================================
// Component implementation
//-----------------------------------------------------------------------------
export default < Component<(this:Vue)=>DateTimeInputData, DateTimeInputMethods, DateTimeInputComputed, DateTimeInputProps> > {
  components: { DatePicker },
  props: {
    title: '',
    clickHandler: ()=>{},
    type: ''
  },

  data() {
    return { value: new Date() };
  },

  methods: {
    onClickHandler: function(this:DateTimeInputObject) {
      if( this.clickHandler ){ this.clickHandler(this.value); }
    },
  },

};
</script>

<!-- STYLE =================================================================-->
<style scoped>
.grid_container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
