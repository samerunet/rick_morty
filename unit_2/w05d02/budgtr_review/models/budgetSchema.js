const mongoose = require('mongoose');
const Schema = mongoose.Schema

const budgetSchema = new Schema({
    date:  { type: String, required: true},
    name:  { type: String, required: true },
    from: {type: String, required: true },
    amount: {type: Number, required: true },
    tags: [{
        type: String
    }]
}, {timestamps: true});

const Budget = mongoose.model('Budget', budgetSchema);
module.exports = Budget;