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

  getFiles () {
    return Api().get('files')
  },

  addFile (params) {
    return Api().post('files', params)
  }
}