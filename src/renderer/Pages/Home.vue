
<!-- TEMPLATE ==============================================================-->
<template>
  <v-ons-page>
    <custom-toolbar>Home</custom-toolbar>
    <div id="welcome_msg">Hello World!</div>
  </v-ons-page>
</template>

<!-- SCRIPT ================================================================-->
<script lang="ts">
import CustomToolbar from '../Components/_CustomToolbar.vue';
import {mapState, mapActions} from 'vuex';

export default {
  name: 'home',
  components: { CustomToolbar },
}
</script>

<!-- STYLE =================================================================-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#welcome_msg {
  font-weight: bold;
  font-size:xx-large;
  text-align: center;
  padding:2%;
}
</style>
