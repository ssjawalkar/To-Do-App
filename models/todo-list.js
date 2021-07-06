const mongoose = require('mongoose');

const todo_list_schema = new mongoose.Schema({
    notes: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const User = mongoose.model('todo_list', todo_list_schema);

module.exports = User;