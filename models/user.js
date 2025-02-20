const mongoose = require('mongoose');

// Creating the employee schema 

const employeeSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true, // Ensures Mongoose generates an ObjectId for each employee
    },
    name: {
        type: String, 
        required: true
    },
    position: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['full-time', 'part-time', 'per-diem']
    },
});

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    employees: [employeeSchema], // embedding the employee schema within the user
});

const User = mongoose.model('User', userSchema);

module.exports = User;