
<!-- TEMPLATE ==============================================================-->
<template>
  <v-ons-list-item tappable modifier="chevron" @click="navigate(menuItem.page)">
    <div class="center">{{menuItem.title}}</div>
  </v-ons-list-item>
</template>

<!-- SCRIPT ================================================================-->
<script lang="ts">
import {mapState, mapActions} from 'vuex';

export default {
  name: 'custom-menu',
  methods: <any> {
    navigate(page: any){
      this.pushPage(page);
      this.closeSideMenu();
    },
    ...mapActions('_SideMenu', ['closeSideMenu']),
    ...mapActions('_PageNavigation', ['pushPage']),
  },
  props: ['menuItem']
};
</script>
