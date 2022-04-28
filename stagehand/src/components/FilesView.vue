<template>
<v-container>
    <NavDrawer />
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
      </v-btn>
      <v-btn 
        variant="plain" 
        class="mb-2 ico-category"
        icon="mdi-image-outline"
      >
      </v-btn>
      <v-btn 
        variant="plain" 
        class="mb-2 ico-category"
        icon="mdi-video-outline"
      >
      </v-btn>
      <v-btn 
        variant="plain" 
        class="mb-2 ico-category"
        icon="mdi-music-box-outline"
      >
      </v-btn>
      <v-card 
              flat
              color="#f9fafb"
              class="mt-4 mx-2 pa-2 rounded-lg" 
              v-for="upload in uploads" :key="upload._id"
            >
              <h1 class="title text-h7">{{ upload.img }}</h1>
          </v-card>
    </v-card>
    </v-container>      
</template>

<script>

import NavDrawer from './ui/NavDrawer.vue'
import PostsService from '../services/PostsService.js'

export default {
  name: 'FilesView',
  components: {
    NavDrawer
  },
  data () {
    return {
      uploads: [],
    }
  },
  mounted () {
    this.getUploads()
  },
  methods: {
    async getUploads () {
      const response = await PostsService.getUploads()
      this.uploads = response.data["uploads"]
      console.log(this.uploads);
    },
  },
}

</script>