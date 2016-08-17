export default (sequelize, DataTypes) => {
    let System = sequelize.define("systems", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        system: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        timestamps: false,
        classMethods: {
            associate: (models) => {
                System.hasMany(models.bases);
                System.hasMany(models.bizs);
                System.hasMany(models.events);
            }
        }
    });
    return System;
}