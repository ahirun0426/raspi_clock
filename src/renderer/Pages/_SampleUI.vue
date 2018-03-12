
<!-- TEMPLATE ==============================================================-->
<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Back'" :menuDisable="true">Sample UI</custom-toolbar>
    <p style="text-align: center">
    <!-- >>>PERROQUET>>> id:ppage_sample_link -->
    <!-- >>>PERROQUET>>> id:pmodule_sample_page_tag -->
    <AppSettings id='setting' />
    <!-- <<<PERROQUET<<< -->
    </p>
  </v-ons-page>
</template>

<!-- SCRIPT ================================================================-->
<script lang="ts">
import {mapActions} from 'vuex';
import CustomToolbar from '../Components/_CustomToolbar.vue';

// >>>PERROQUET>>> id:ppage_page_import
// >>>PERROQUET>>> id:pmodule_sample_page_import
import AppSettings from '../pmodules/AppSettings/AppSettings.vue';
// <<<PERROQUET<<<

export default {
  name: 'SampleUI',
  methods: {
    // >>>PERROQUET>>> id:ppage_navigate_methods
    // <<<PERROQUET<<<
    ...mapActions('_PageNavigation', ['pushPage']),
  },
  components: { CustomToolbar,
  // >>>PERROQUET>>> id:pmodule_sample_page_component
  AppSettings,
  // <<<PERROQUET<<<
  },
}
</script>
