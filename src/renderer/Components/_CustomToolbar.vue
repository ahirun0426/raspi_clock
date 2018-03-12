
<!-- TEMPLATE ==============================================================-->
<template>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-back-button v-if="backLabel">{{backLabel}}</v-ons-back-button>
    </div>
    <div class="center"><slot></slot></div>
    <div class="right">
      <v-ons-toolbar-button @click="openSideMenu()" v-if="!menuDisable">
        <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
  </v-ons-toolbar>
</template>

<!-- SCRIPT ================================================================-->
<script lang="ts">
import {mapActions} from 'vuex';

export default {
  name: 'custom-toolbar',
  methods: {
    ...mapActions('_SideMenu', ['openSideMenu'])
  },
  props: ['backLabel', 'action', 'menuDisable'],
};
</script>

<!-- STYLE =================================================================-->
<style scoped>
</style>
