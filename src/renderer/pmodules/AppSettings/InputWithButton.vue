<!-- TEMPLATE ==============================================================-->
<template>
  <div class="grid_container">
    <v-ons-col>
      <v-ons-input v-model="value" />
    </v-ons-col>
    <v-ons-col>
      <v-ons-button @click="onClick">{{title}}</v-ons-button>
    </v-ons-col>
  </div>
</template>

<!-- SCRIPT ================================================================-->
<script lang="ts">
import Vue, {Component} from 'vue';

//=============================================================================
// Type definitions
//-----------------------------------------------------------------------------
interface InputWithButtonData {
}

interface InputWithButtonMethods {
  onClick:  ()=>void;
}

interface InputWithButtonComputed {
};

interface InputWithButtonProps {
  id:           string;
  title:        string;
  value:        string;
  clickHandler: ()=>void;
}

type InputWithButtonObject = Vue & InputWithButtonData & InputWithButtonMethods & InputWithButtonComputed & InputWithButtonProps;


//=============================================================================
// Component implementation
//-----------------------------------------------------------------------------
export default < Component<any, any, InputWithButtonMethods, InputWithButtonProps> > {
  props: {
    id:           '',
    title:        '',
    value:        '',
    clickHandler: ()=>{},
  },

  methods: {
    onClick: function() {
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
