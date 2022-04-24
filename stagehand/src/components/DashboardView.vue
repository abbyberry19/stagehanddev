<template>
  <v-container class="h-screen">
    <v-row no-gutters cols="12">
      <NavDrawer />
      <v-col sm="6" md="8">
        <v-card theme="light" class="pa-2 rounded-xl" flat>
          <h1 class="title text-h5 mt-2 ml-4">NewsFeed</h1>
          <v-btn variant="plain">Newest</v-btn>
          <v-btn variant="plain">Oldest</v-btn>
         <!-- <div>
    <div v-if="currentFile">
      <div>
        <v-progress-linear
          v-model="progress"
          color="light-blue"
          height="25"
          reactive
        >
          <strong>{{ progress }} %</strong>
        </v-progress-linear>
      </div>
    </div>
    <v-row no-gutters justify="center" align="center">
      <v-col cols="8">
        <v-file-input
          show-size
          label="File input"
          @change="selectFile"
        ></v-file-input>
      </v-col>
      <v-col cols="4" class="pl-2">
        <v-btn color="success" dark small @click="upload">
          Upload
          <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-alert v-if="message" border="left" color="blue-grey" dark>
      {{ message }}
    </v-alert>
    <v-card v-if="fileInfos.length > 0" class="mx-auto">
      <v-list>
        <v-subheader>List of Files</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="(file, index) in fileInfos" :key="index">
            <a :href="file.url">{{ file.name }}</a>
          </v-list-item>
        </v-list-item-group>
      </v-list> -->
    <!-- </v-card>
  </div> -->
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
              <text-subtitle-1>{{ post.description }}</text-subtitle-1>
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
import UploadService from "../services/UploadFilesService.js";

export default {
  name: "DashboardView",
  components: {
    NavDrawer,
    PostForm,
  },
  data () {
    return {
      currentFile: undefined,
      progress: 0,
      message: "",
      fileInfos: [],
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.getPosts()
      this.posts = response.data["posts"]
    },
    async deletePost (id) {
      await PostsService.deletePost(id)
      this.$router.go()
    },
    selectFile(file) {
      this.progress = 0;
      this.currentFile = file;
    },
    upload() {
      if (!this.currentFile) {
        this.message = "Please select a file!";
        return;
      }
      this.message = "";
      UploadService.upload(this.currentFile, (event) => {
        this.progress = Math.round((100 * event.loaded) / event.total);
      })
        .then((response) => {
          this.message = response.data.message;
          return UploadService.getFiles();
        })
        .then((files) => {
          this.fileInfos = files.data;
        })
        .catch(() => {
          this.progress = 0;
          this.message = "Could not upload the file!";
          this.currentFile = undefined;
        });

      UploadService.getFiles().then(response => {
        this.fileInfos = response.data;
      });
    },
  },
};
</script>
