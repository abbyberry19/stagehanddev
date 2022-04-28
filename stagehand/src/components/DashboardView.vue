<template>
  <v-container class="h-screen">
    <v-row no-gutters cols="12">
      <NavDrawer />
      <v-col sm="6" md="8">
        <v-card theme="light" class="pa-2 rounded-xl" flat>
          <h1 class="title text-h5 mt-2 ml-4">NewsFeed</h1>
          <v-btn variant="plain">Newest</v-btn>
          <v-btn variant="plain">Oldest</v-btn>
          <UploadForm />
          <v-card 
              flat
              color="#f9fafb"
              class="mt-4 mx-2 pa-2 rounded-lg overflow-hidden" 
              v-for="upload in uploads" :key="upload._id"
            >
              <h1 class="text-lg overflow-hidden">{{ upload.img }}</h1>
          </v-card>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card theme="light" class="pa-2 ml-4 rounded-xl" flat>
          <h1 class="title text-h5 mt-2 ml-4">Forum</h1>
          <div class="d-flex flex-row">
            <div class="justify-start">
              <v-btn variant="plain">Newest</v-btn>
              <v-btn variant="plain">Oldest</v-btn>
            </div>
            <div class="items-end align-middle">
              <PostForm />
            </div>
          </div>
            <v-card 
              flat
              color="#f9fafb"
              class="mt-4 mx-2 pa-2 rounded-lg" 
              v-for="post in posts" :key="post._id"
            >
              <v-btn 
                variant = "outlined"
                icon = "mdi-trash-can-outline"
                color="#f9fafb"
                size="x-small"
                class="float-right"
                @click="deletePost(post._id)"
              />
              <h1 class="title text-h7">{{ post.title }}</h1>
              <text-body-1>{{ post.description }}</text-body-1>
            </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavDrawer from "./ui/NavDrawer.vue";
import PostsService from '../services/PostsService.js'
import PostForm from "./ui/PostForm.vue"
import UploadForm from "./ui/UploadForm.vue"
// import UploadService from "../services/UploadFilesService.js";

export default {
  name: "DashboardView",
  components: {
    NavDrawer,
    PostForm,
    UploadForm,
  },
  data () {
    return {
      currentFile: undefined,
      progress: 0,
      message: "",
      fileInfos: [],
      posts: [],
      uploads: [],
    }
  },
  mounted () {
    this.getPosts()
    this.getUploads()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.getPosts()
      this.posts = response.data["posts"]
      console.log(this.posts);
    },
    async getUploads () {
      const response = await PostsService.getUploads()
      this.uploads = response.data["uploads"]
      console.log(this.uploads);
    },
    async deletePost (id) {
      await PostsService.deletePost(id)
      this.$router.go()
    },
  },
};
</script>
