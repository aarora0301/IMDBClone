const {check} = require('express-validator/check');

module.exports = {
    requestValidator: [
        check('title', 'name is required').exists(),
        check('title', 'name cannot be empty').not().isEmpty(),
        check('yearOfRelease', 'yearOfRelease is required').exists(),
        check('yearOfRelease', 'yearOfRelease cannot be empty').not().isEmpty(),
        check('plot', 'plot is required').exists(),
        check('plot', 'plot cannot be empty').not().isEmpty(),
    ],
    errorFormatter: ({msg, param, value, nestedErrors}) => ({
        type: 'Error',
        name: 'Movie validation Failure',
        message: msg,
        param,
        value,
        nestedErrors
    })
}