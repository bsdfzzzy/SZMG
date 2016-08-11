'use strict';
const date = new Date()
const bizs = [{
    id: 1,
    system: 'test1_name',
    column: 'column1',
    playStart: new Date(),
    playFinish: new Date(),
    numOfNeeds: 1,
    allReadyTime: new Date(),
    state: 1
},
{
    id: 2,
    system: 'test2_name',
    column: 'column2',
    playStart: new Date(),
    playFinish: new Date(),
    numOfNeeds: 2,
    allReadyTime: new Date(),
    state: 2
}];

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('bizs', bizs, {});
    }
}