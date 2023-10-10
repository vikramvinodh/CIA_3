const mongoose = require('mongoose');
var autoIncrement = require('mongoose-sequence')(mongoose);

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    designation: {
        type: String,
    },
    linkdin: {
        type: String,
    },
    facebook: {
        type: String,
    },
    twitter: {
        type: String,
    },
    bottomBlock: {
        type: Array,
    },
    internalBlock: {
        type: Array,
    },
    photo: {
        type: String,
    },
    since_year: {
        type: String,
    },
    
    blogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'article'
        }
    ],
    createdAt: {
        type: String
    },
    updatedAt: {
        type: String
    }
},
    {
        strictPopulate: false
    });

AuthorSchema.plugin(autoIncrement, { inc_field: 'BlogAuthorid' });

const Author = mongoose.model('blog-authors', AuthorSchema);

module.exports = Author;
