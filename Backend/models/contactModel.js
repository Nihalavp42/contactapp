var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    firstname: { 
        type: String,
        required: true 
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    }
});

var contact = mongoose.model("Contact", contactSchema);

module.exports = contact;
