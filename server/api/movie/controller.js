const isEmpty = require('lodash/isEmpty');
const commonRepository = require('../common').repository;
const apiConfig = require('../../config').API;

function get(id, limit) {
    const findOne = Boolean(id);
    limit = !findOne ? limit || apiConfig.RESPONSE_COUNT_LIMIT : null;
    const query = findOne ? {_id: id} : {};
    return commonRepository.getOneOrAll('Movie', query, null, limit, findOne);
}

function getByTitle(title) {
    return commonRepository.getOneOrAll('Movie', {title}, null, null, true)
}

async function save(payload) {
    try {
        const existingMovie = await getByTitle(payload.title);
        const doesMovieExist = !isEmpty(existingMovie);
        if (doesMovieExist) {
            return Promise.reject("This Movie Already Exists");
        }
        return commonRepository.save(null, 'Movie', payload, null);
    } catch (err) {
        return Promise.reject(err);
    }
}

async function updateMovie(id, payload) {
    try {
        let title, yearofRelaese, plot, actors = [], producers = [];
        const existingMovie = await get(id);
        const doesMovieExist = !isEmpty(existingMovie);
        if (!doesMovieExist) {
            return Promise.reject("No such movie exists");
        }
        title = payload.title || existingMovie.title;
        yearofRelaese = payload.yearOfRelease || existingMovie.yearOfRelease;
        plot = payload.plot || existingMovie.plot;
        actors = payload.actors || existingMovie.actors;
        producers = payload.producers || existingMovie.producers;

        return commonRepository.update('Movie', {_id: id}, {
            title: title, yearOfRelease: yearofRelaese,
            plot: plot, actors: actors, producers: producers
        });
    } catch (err) {
        return Promise.reject(err);
    }
}

async function deleteMovie(id) {
    try {
        const existingMovie = await get(id);
        const doesMovieExist = !isEmpty(existingMovie);
        if (!doesMovieExist) {
            return Promise.reject("No such movie exists");
        }
        return commonRepository.remove('Movie', {_id: id});

    } catch (err) {
        return Promise.reject(err);
    }
}

module.exports = {
    get,
    save,
    updateMovie,
    deleteMovie
}
