const mongoose = require('mongoose');
const Schema = mongoose.Schema;


contactSchema = new Schema({

    email: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
    },
        createdBy:{
            type : String,
            required:true
        }
    }),
    Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;