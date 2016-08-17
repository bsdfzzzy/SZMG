export default (sequelize, DataTypes) => {
    let Event = sequelize.define("events", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW, 
            allowNull: false,
        },
        /*system: {
            type: DataTypes.STRING,
            allowNull: false,
        },*/
        event: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        createdAt: false,
        updatedAt:false,
        classMethods: {
            associate: (models) => {
                Event.belongsTo(models.systems, {
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Event;
}