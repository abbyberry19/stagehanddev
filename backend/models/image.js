var mongoose = require('mongoose');
 
var uploadSchema = new mongoose.Schema({
    myFile:
    {
        data: Buffer,
        contentType: String
    }
});
 
//Image is a model which has a schema imageSchema
 
module.exports = new mongoose.model('Upload', uploadSchema);
