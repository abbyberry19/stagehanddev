<template>
    <!-- <v-theme-provider theme="dark" with-background> -->
        <NavDrawer />
    <!-- </v-theme-provider> -->
    <v-card
      class="rounded-xl"
      color="white"
      plain
      flat
    >
      <h1 class="title text-h5 pt-4 pb-2 ml-6">Uploaded Files</h1>

      <v-btn 
        variant="plain" 
        class="mb-2 ml-2 ico-category"
        icon="mdi-file-document-outline"
      >
        <!-- <v-icon 
          class="px-0"
          icon="mdi-file-document-outline"
        ></v-icon> -->
      </v-btn>
      <v-btn 
        variant="plain" 
        class="mb-2 ico-category"
        icon="mdi-image-outline"
      >
        <!-- <v-icon
          icon="mdi-image-outline"
        ></v-icon> -->
      </v-btn>
      <v-btn 
        variant="plain" 
        class="mb-2 ico-category"
        icon="mdi-video-outline"
      >
        <!-- <v-icon
          icon="mdi-video-outline"
        ></v-icon> -->
      </v-btn>
      <v-btn 
        variant="plain" 
        class="mb-2 ico-category"
        icon="mdi-music-box-outline"
      >
        <!-- <v-icon
          icon="mdi-music-box-outline"
        ></v-icon> -->
      </v-btn>
    </v-card>      
</template>

<script>

import NavDrawer from './ui/NavDrawer.vue'

export default {
  name: 'FilesView',
  components: {
    NavDrawer
  }
}

</script>