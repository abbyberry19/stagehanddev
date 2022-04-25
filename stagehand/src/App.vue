<template>
<v-app class="bg-gray-100 bg-cover min-h-screen">
  <AppHeader />
    <v-main>

      <v-container fluid>

        <router-view />
      
      </v-container>

  </v-main>
  
</v-app>
</template>

<script>
import AppHeader from './components/ui/AppHeader.vue'
// import NavDrawer from './components/ui/NavDrawer.vue'

export default {
  name: 'App',

  components: {
    AppHeader
  },

  data: () => ({
    //
  }),
}
</script>

<style>
 @import './style/style.css';
</style>