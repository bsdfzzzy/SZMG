'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.createTable('systems', {
            id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        system: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    },{
        charset: 'utf8'
        }
    )},
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('systems');
    }
};