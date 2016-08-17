'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('bases', 
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            date: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            system_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'systems',
                    key: 'id'
                }
            },
            subsystem: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            supervisor_1: Sequelize.STRING,
            supervisor_2: Sequelize.STRING,
            supervisor_3: Sequelize.STRING,
            respector: Sequelize.STRING,
            experiment: Sequelize.STRING,
            IP: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            type: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            work: Sequelize.TEXT,
            category: Sequelize.STRING,
            stateOrData: Sequelize.STRING,
            More: Sequelize.STRING
        },{
            charset: 'utf8'
        }
    )},
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('bases');
    }
};