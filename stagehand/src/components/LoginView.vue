<template>
<v-container>
    <v-card class="mx-auto elevation-5 text-center pa-6 rounded-xl" max-width="350">
      <v-card-title class="title pa-0 mb-4">
        Login
      </v-card-title>
      <v-text-field 
        variant = "underlined" 
        color="indigo" 
        label="Email"
        density = "comfortable"
        hide-details="auto"
        placeholder="Email"
        class="pb-4">
      </v-text-field>
      <v-text-field 
        variant = "underlined"
        color="indigo" 
        label="Password" 
        placeholder="Password"
        density = "comfortable"
        type="password">
      </v-text-field>
      <v-card-actions class="d-flex justify-space-around align-center pb-6">  
        <LoginButton />
      </v-card-actions>
        <span class="pt-6 subtitle-2 primary--text" style="cursor:pointer">Forgotten password?</span>
    </v-card>
      <div class="text-center">
         <p class="pt-4">Don't have an account? <span class="red--text" style="cursor:pointer">Register here.</span></p>
     </div>
     </v-container>
</template>

<script>
import LoginButton from './ui/LoginButton.vue'

export default {
  name: 'LoginView',
  components: {
    LoginButton
  }
}
</script>