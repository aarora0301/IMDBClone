const express = require('express');
const v = require('./validation');
const auth = require('../common').auth;
const {validationResult} = require('express-validator/check');
const controller = require('./controller');
const router = express.Router({mergeParams: true});

function post(req, res) {
    const errors = validationResult(req).formatWith(v.errorFormatter);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }
    return controller
        .save(req.body)
        .then(result =>
            res.json({message: 'Movie saved successfully', id: result._id})
        )
        .catch(err => res.json({message: 'not able to save movie', error: err}));
}

function get(req, res) {
    try {
        return controller
            .get()
            .then(movie => res.json({movie}))
            .catch(err => res.json({message: 'not able to get records', error: err}));
    } catch (err) {
        return res.json({err});
    }
}

function getById(req, res) {
    try {
        return controller
            .get(req.params.id)
            .then(movie => res.json({movieInfo: movie}))
            .catch(err => res.json({message: 'not able to get movie', error: err}));
    } catch (err) {
        return res.json({err});
    }
}

function update(req, res) {
    try {
        return controller
            .updateMovie(req.params.id, req.body)
            .then(movie => res.json({movieInfo: movie}))
            .catch(err => res.json({message: 'not able to update  movie', error: err}));
    } catch (err) {
        return res.json({err});
    }
}


function remove(req, res) {
    try {
        return controller.deleteMovie(req.params.id)
            .then(movie => res.status(200).json({message: "movie deleted successfully"}))
            .catch(err => res.status(400).json({error: err}));
    } catch (err) {
        return res.json(err);
    }
}


router.post('/', v.requestValidator, post);
router.get('/', get);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);
module.exports = router;





