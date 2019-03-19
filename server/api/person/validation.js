const {check} = require('express-validator/check');

module.exports = {
    requestValidator: [
        check('name', 'name is required').exists(),
        check('name', 'name cannot be empty').not().isEmpty(),
        check('bio', 'bio is required').exists(),
        check('bio', 'bio cannot be empty').not().isEmpty(),
        check('gender', 'name is required').exists(),
        check('gender', 'name cannot be empty').not().isEmpty(),
        check('dob', 'dob should be in yyyy-mm-dd  format').isISO8601('yyyy-mm-dd')
    ],
    errorFormatter: ({msg, param, value, nestedErrors}) => ({
        type: 'Error',
        name: 'Person validation Failure',
        message: msg,
        param,
        value,
        nestedErrors
    })
}