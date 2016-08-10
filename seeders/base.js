'use strict';
const date = new Date()
const bases = [{
    id: 1,
    date: new Date(date.getFullYear(), date.getMonth(), date.getDay()),
    system: 'test1_name',
    subsystem: 'test1',
    supervisor_1: 'supervisor_1',
    supervisor_2: 'supervisor_2',
    supervisor_3: 'supervisor_3',
    respector: 'respector',
    experiment: 'experiment',
    IP: 'IP',
    type: 'type',
    work: 'work',
    category: 'category',
    stateOrData: 'stateOrData',
    More: 'More'
},
{
    id: 2,
    date: new Date(date.getFullYear(), date.getMonth(), date.getDay()),
    system: 'test2_name',
    subsystem: 'test2',
    supervisor_1: 'supervisor_1',
    supervisor_2: 'supervisor_2',
    supervisor_3: 'supervisor_3',
    respector: 'respector',
    experiment: 'experiment',
    IP: 'IP',
    type: 'type',
    work: 'work',
    category: 'category',
    stateOrData: 'stateOrData',
    More: 'More'
}];

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('bases', bases, {});
    }
}