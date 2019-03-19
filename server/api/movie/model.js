const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Person=require('../person/model');

const MovieSchema = new Schema({
    title: {type: String, unique: true, uppercase: true},
    yearOfRelease: Number,
    plot: String,
    poster: String,
    actors: [{
        type:Schema.Types.ObjectId,
        ref: Person
    }],
    producers: [{
        type: Schema.Types.ObjectId,
        ref: Person
    }]
});

module.exports = mongoose.model('Movie', MovieSchema);
