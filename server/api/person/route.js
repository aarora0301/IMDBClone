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
        .then(result =>{
            console.log("result",result);
           return  res.json({message: 'Person saved successfully', id: result._id})}
        )
        .catch(err => res.json({message: 'not able to save cast information', error:err}));
}

function get(req, res) {
    try {
        return controller
            .get(req.params.id)
            .then(actor => res.json({actorInfo: actor}))
            .catch(err => res.status(400).json({message: 'not able to get cast information'}));
    } catch (err) {
        return res.json({err});
    }
}

function getMovies(req, res) {
    try {
        return controller
            .get(req.params.id)
            .then(actor => res.json({actedIn: actor.actedIn, produced: actor.producedBy}))
            .catch(err => res.status(400).json({message: 'not able to get movies'}));
    } catch (err) {
        return res.json({err});
    }
}

router.post('/', v.requestValidator, post);
router.get('/:id', get);
router.get('/:id/movies', getMovies);
module.exports = router;



