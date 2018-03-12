
<!-- TEMPLATE ==============================================================-->
<template>
  <v-ons-splitter-side swipeable width="150px" collapse="" side="right"
    :open.sync="openSide" @preclose="closeSideMenu()">
    <v-ons-page>
      <v-ons-list>
        <SideMenuItem :menuItem="item" v-for="item in menuItems" v-bind:key="item.name" />
      </v-ons-list>
    </v-ons-page>
  </v-ons-splitter-side>
</template>

<!-- SCRIPT ================================================================-->
<script lang="ts">
import {mapState, mapActions} from 'vuex';

import SideMenuItem from './_SideMenuItem.vue';

import _SampleUI from '@/Pages/_SampleUI.vue';
import _SettingsUI from '@/Pages/_SettingsUI.vue';

// >>>PERROQUET>>> id:ppage_page_import
// <<<PERROQUET<<<

export default <any> {
  name: 'custom-menu',
  created: function() {
    this.addMenuItem( { name: '_SampleUI',    title: 'Sample UI', page: _SampleUI } );
    this.addMenuItem( { name: '_SettingsUI',  title: 'Settings',  page: _SettingsUI } );
    // >>>PERROQUET>>> id:ppage_addmenuitem
    // <<<PERROQUET<<<
  },
  computed: {
    ...mapState('_SideMenu', ['menuItems', 'openSide']),
  },
  methods: {
    ...mapActions('_SideMenu', ['addMenuItem', 'closeSideMenu']),
  },
  components: { SideMenuItem }
};
</script>

<!-- STYLE =================================================================-->
<style scoped>
</style>
