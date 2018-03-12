<template>
  <v-ons-splitter :page-stack="pageStack">
    <side-menu :openSide="false"></side-menu>
    <v-ons-splitter-content>
      <v-ons-navigator :page-stack="pageStack" v-on:pageInit="init()">
        <component :is="page" v-bind:key="page.name"
          v-for="page in pageStack" :page-stack="pageStack"></component>
      </v-ons-navigator>
    </v-ons-splitter-content>    
  </v-ons-splitter>    
</template>

<script>
import SideMenu from '@/Components/_SideMenu.vue';
import {mapState, mapActions} from 'vuex';
import Home from '@/Pages/Home.vue';

export default {
  name: 'app',
  created: function(){
    // Initialize the application start page
    this.pushPage(Home);
  },
  computed: {
    ...mapState('_PageNavigation', ['pageStack']),
  },
  methods: {
    ...mapActions('_PageNavigation', ['pushPage']),
  },
  components: { SideMenu }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
