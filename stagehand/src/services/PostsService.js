import Api from '../services/api.js'

export default {

  // Statuses

  getPosts () {
    return Api().get('posts')
  },

  addPost (params) {
    return Api().post('posts', params)
  },

  getPost (params) {
    return Api().get('post/' + params.id)
  },

  deletePost (id) {
    return Api().delete('posts/' + id)
  },

  // Files

  getUploads () {
    return Api().get('uploads')
  },

  addUpload (params) {
    return Api().post('uploads', params)
  }
}