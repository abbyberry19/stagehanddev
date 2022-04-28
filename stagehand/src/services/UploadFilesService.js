import Api from '../services/api.js'

class UploadFilesService {
  addUpload(file) {
    let formData = new FormData();
    formData.append("uploads", file);
    return Api.post("/uploads", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
  getUploads() {
    return Api.get("/uploads");
  }
}
export default new UploadFilesService();