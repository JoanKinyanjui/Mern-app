const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const excerciseSchema = Schema({
    username :{
        type: String, required: true
    },
    description:{
        type: String, required: true
    },
    duration:{
        type:   Number, required: true
    },
    date:{
        type: Date, required: true
    }
},{
    timestamps: true
});

const Excercise = mongoose.model('Excercise',excerciseSchema);

module.exports = Excercise;