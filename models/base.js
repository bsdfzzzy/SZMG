export default (sequelize, DataTypes) => {
    let Base = sequelize.define("bases", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        system: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subsystem: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        supervisor_1: DataTypes.STRING,
        supervisor_2: DataTypes.STRING,
        supervisor_3: DataTypes.STRING,
        respector: DataTypes.STRING,
        experiment: DataTypes.STRING,
        IP: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        work: DataTypes.TEXT,
        category: DataTypes.STRING,
        stateOrData: DataTypes.STRING,
        More: DataTypes.STRING
    }, {
        timestamps: false,
    });
    return Base;
}