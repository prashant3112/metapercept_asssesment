const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    name : {
        type:String,
        required:true,
    },
    email : {
        type:String,
        required:true,
    },
    password : {
        type:String,
        required:true,
    },

    confirm_password : {
        type:String,
        required:true,
    },

    mobile : {
        type:String,
        required:true,
    },

    varification_status : {
        type:Boolean,
        required:true,
    }
},{
    timestamps: true,
});

module.exports = mongoose.model('Note',NoteSchema);