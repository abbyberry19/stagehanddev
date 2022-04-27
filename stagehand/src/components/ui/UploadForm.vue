<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>File
       <form action="/uploadphoto" enctype="multipart/form-data" method="POST">
        <input type="file" name="myImage" accept="image/*">
        <input type="submit" value="Upload Photo">
    </form>
      </label>
      <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'; 

  export default {
    /*
      Defines the data used by the component
    */
    data(){
      return {
        file: ''
      }
    },

    methods: {
      /*
        Submits the file to the server
      */
      submitFile(){
        /*
                Initialize the form data
            */
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);

        /*
          Make the request to the POST /single-file URL
        */
            axios.post( '/single-file',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    }
  }
</script>