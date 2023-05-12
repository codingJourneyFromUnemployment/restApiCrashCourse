const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter goal name'],
        trim: true,
        unique: true,
        maxlength: [50, 'Goal name cannot be more than 50 characters']
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: [500, 'Goal description cannot be more than 500 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Goal', goalSchema);