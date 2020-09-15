const Mock = require('mockjs');
const user = require('./user');
const routes = require('./routes');
const mocks = [
    ...user,
    ...routes
]
module.exports = {
    mocks
};
