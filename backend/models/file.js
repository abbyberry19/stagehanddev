var mongoose = require('mongoose');
 
var fileSchema = new mongoose.Schema({
    name: String,
    desc: String,
    imageUrl:
    {
        type: String,
    }
});
 
//Image is a model which has a schema imageSchema
 
module.exports = new mongoose.model('File', fileSchema);
