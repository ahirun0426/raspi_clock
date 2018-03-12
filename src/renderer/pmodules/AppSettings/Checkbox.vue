<!-- TEMPLATE ==============================================================-->
<template>
  <div class="grid_container">
    <v-ons-col>
      {{title}}
    </v-ons-col>
    <v-ons-col>
      <v-ons-checkbox v-model="checked" />
    </v-ons-col>
  </div>
</template>

<!-- SCRIPT ================================================================-->
<script lang="ts">
import Vue, {Component} from 'vue';

//=============================================================================
// Type definitions
//-----------------------------------------------------------------------------
interface CheckBoxData {
  checked: boolean;
}

interface CheckBoxMethods {
  onChange: ()=>void;
}

interface CheckBoxComputed {
};

interface CheckBoxProps {
  id:             string;
  title:          string;
  changeHandler:  (arg:boolean)=>void;
};

type CheckBoxObject = Vue & CheckBoxData & CheckBoxMethods & CheckBoxComputed & CheckBoxProps;

//=============================================================================
// Component implementation
//-----------------------------------------------------------------------------
export default < Component<(this:Vue)=>CheckBoxData, CheckBoxMethods, CheckBoxComputed, CheckBoxProps> > {
  props: {
    id            : '',
    title         : '',
    changeHandler : (arg:boolean)=>{},
  },

  data() {
    return { checked: false };
  },

  watch: {
    checked: 'onChange'
  },

  methods: {
    onChange: function(this:CheckBoxObject) {
      if( this.changeHandler ){ this.changeHandler(this.checked); }
      this.$emit('input', this.checked);
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
