import Api from '../services/api.js'

class UploadFilesService {
  addFile(file) {
    let formData = new FormData();
    formData.append("file", file);
    return Api.post("/files", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
  getFiles() {
    return Api.get("/files");
  }
}
export default new UploadFilesService();