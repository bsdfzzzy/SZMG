'use strict';

const events = [{
    id: 1,
    system: 'test1',
    event: 'test1_name'
},
{
    id: 2,
    system: 'test2',
    event: 'test2_name'
}];

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('events', events, {});
    }
}