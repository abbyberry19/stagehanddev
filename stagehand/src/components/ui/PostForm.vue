<template>
  <div class="text-center">
    <v-btn
      class="align-middle"
      color="primary"
      size="small"
    >
      New Post

      <v-dialog
        v-model="dialog"
        activator="parent"
      >
        <v-card
            width="400"
            height="350"
            class="px-4"
        >
         <h1 class="title text-h5 mt-4">Create a Post</h1>
            <v-text-field 
                v-model="title"
                color="primary" 
                label="Title"
                density = "comfortable"
                hide-details="auto"
                placeholder="Title"
                class="pt-4">
            </v-text-field>
            <v-textarea 
                v-model="description"
                color="primary" 
                label="Description"
                density = "comfortable"
                hide-details="auto"
                placeholder="Description"
                class="-mt-4">
            </v-textarea>
          <v-card-actions class="pb-4">
            <v-btn color="primary" plain block @click="addPost">Submit Post</v-btn>
            <v-btn color="error" block @click="dialog = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>

<script>
import PostsService from '../../services/PostsService.js'

export default {
  name: 'NewPost',
  data () {
    return {
      title: '',
      description: '',
      dialog: false,
    }
  },
  methods: {
    async addPost () {
      await PostsService.addPost({
        title: this.title,
        description: this.description
      })
    this.$router.go()
    }
  }
}
</script>