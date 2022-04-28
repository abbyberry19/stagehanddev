<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <form action="/uploadfile" enctype="multipart/form-data" method="POST"> 
          <input type="file" name="img" />
            <div>
                <v-btn color="primary" plain block @click="addUpload">Submit Post</v-btn>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
import PostsService from '../../services/PostsService.js'

  export default {
    /*
      Defines the data used by the component
    */
    data(){
      return {
        img: ''
      }
    },

    methods: {
      async addUpload () {
      await PostsService.addUpload({
        img: this.img,
      })
    this.$router.go()
    }

    //   submitFile(){
    //         let formData = new FormData();
    //         formData.append('file', this.file);
    //         axios.post( '/single-file',
    //             formData,
    //             {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //           }
    //         ).then(function(){
    //       console.log('SUCCESS!!');
    //     })
    //     .catch(function(){
    //       console.log('FAILURE!!');
    //     });
    //   },
    //   handleFileUpload(){
    //     this.file = this.$refs.file.files[0];
    //   }
    // }
  }
}
</script>