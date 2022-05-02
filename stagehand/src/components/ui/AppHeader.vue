<template>
    <v-app-bar 
        flat
        color="white"
    >
        <!-- <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template> -->
    <v-img 
      src="../../assets/title-white.png" 
      style="text-align: left"
      href = "/dashboard"
    />
    <LogoutButton />
  </v-app-bar>
</template>

<script>
import LogoutButton from './LogoutButton.vue';

export default {
  name: "AppHeader",
  components: {
    LogoutButton
  },
}

</script>