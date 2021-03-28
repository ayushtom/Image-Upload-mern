const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* 
    Image Schema for storing images in the 
    mongodb database
*/
const ImageSchema = new Schema({
    
    
    //stores image path
    imageData: {
        type: String,
        required: true
    }
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;