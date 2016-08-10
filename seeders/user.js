'use strict';

const users = [{
    id: 1,
    account: 'test1',
    username: 'test1_name',
    password: 'test1',
    priority: 1
},
{
    id: 2,
    account: 'test2',
    username: 'test2_name',
    password: 'test2',
    priority: 2
}];

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', users, {});
    }
}