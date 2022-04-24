<template>
<v-container>
    <v-card class="mx-auto elevation-5 text-center pa-6 rounded-xl" max-width="350">
      <v-card-title class="title pa-0 mb-4">
        Sign Up
      </v-card-title>
      <v-text-field 
        variant = "underlined" 
        color="indigo" 
        label="Name"
        density = "comfortable"
        hide-details="auto"
        placeholder="Name"
        class="pb-4">
      </v-text-field>
      <v-text-field 
        variant = "underlined" 
        color="indigo" 
        label="Email"
        density = "comfortable"
        hide-details="auto"
        placeholder="Email"
        class="pb-4">
        </v-text-field>
        <v-radio-group 
            v-model="radios"
            mandatory
        >
          <label class="float-left">Your role</label>
            <v-radio
                label="Stage Manager"
                color="indigo"
                value="stage-manager"
            ></v-radio>
            <v-radio
                label="Cast Member"
                color="indigo"
                value="cast-member"
            ></v-radio>
            <v-radio
                label="Crew Member"
                color="indigo"
                value="crew-member"
            ></v-radio>
        </v-radio-group>
      <v-text-field 
        variant = "underlined"
        color="indigo" 
        label="Password" 
        hide-details="auto"
        class="pb-4"
        placeholder="Password"
        density = "comfortable"
        type="password">
      </v-text-field>
      <v-text-field 
        variant = "underlined"
        color="indigo" 
        label="Re-enter Password" 
        placeholder="Re-enter Password"
        density = "comfortable"
        type="password">
      </v-text-field>
      <v-card-actions class="d-flex justify-space-around align-center pb-6">  
        <SignupButton />
      </v-card-actions>
    </v-card>
    </v-container>
</template>

<script>
import SignupButton from './ui/SignupButton.vue'

export default {
  name: 'LoginView',
  components: {
    SignupButton
  }
}
</script>