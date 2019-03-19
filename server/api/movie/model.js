const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {type: String, unique: true, uppercase: true},
    yearOfRelease: Number,
    plot: String,
    poster: String,
    actors: [{
        type: String,
        ref: 'Person'
    }],
    producers: [{
        type: String,
        ref: 'Person'
    }]
});

module.exports = mongoose.model('Movie', MovieSchema);