const isEmpty = require('lodash/isEmpty');
const commonRepository = require('../common').repository;
const apiConfig = require('../../config').API;

function get(id, limit) {
    const findOne = Boolean(id);
    limit = !findOne ? limit || apiConfig.RESPONSE_COUNT_LIMIT : null;
    const query = findOne ? {_id: id} : {};
    return commonRepository.getOneOrAll('Person', query, null, limit, findOne);
}

function getByName(name) {
    return commonRepository.getOneOrAll('Person', {name}, null, null, true)
}

async function save(payload) {
    try {
        let dummy=null;
        const existingUser = await getByName(payload.name);
        const isUserPresent = !isEmpty(existingUser);
        if (isUserPresent)
            return Promise.reject("This Person Already Exists");
        dummy=payload;
        dummy.date=new Date('${payload.dob}');
        return commonRepository.save(null, 'Person', dummy, null);
    } catch (err) {
        return Promise.reject(err);
    }
}
module.exports={
    get,
    save
}