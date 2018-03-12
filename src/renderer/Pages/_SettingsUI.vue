
<!-- TEMPLATE ==============================================================-->
<template>
  <v-ons-page>
    <custom-toolbar
      :back-label="'Back'" :menuDisable="true">Settings</custom-toolbar>
    <p style="text-align: center">
      Select platform ('Other than Android/iOS would not be performed')
      <v-ons-row>
        <v-ons-col>
          <v-ons-button @click="select('android')">Android</v-ons-button>
          <v-ons-button @click="select('ios')">iOS</v-ons-button>
          <v-ons-button @click="select('opera')">opera</v-ons-button>
          <v-ons-button @click="select('firefox')">firefox</v-ons-button>
          <v-ons-button @click="select('safari')">Safari</v-ons-button>
          <v-ons-button @click="select('chrome')">Chrome</v-ons-button>
          <v-ons-button @click="select('ie')">IE</v-ons-button>
          <v-ons-button @click="select('blackberry')">Blackberry</v-ons-button>
          <v-ons-button @click="select('wp')">wp</v-ons-button>
        </v-ons-col>
      </v-ons-row>
    </p>
  </v-ons-page>
</template>

<!-- SCRIPT ================================================================-->
<script lang="ts">
import CustomToolbar from '../Components/_CustomToolbar.vue';

export default {
  name: 'SecondUI',
  methods: <any> {
    select(platform: string) {
      this.$ons._ons.forcePlatformStyling(platform);
    }
  },
  components: { CustomToolbar },
}
</script>
