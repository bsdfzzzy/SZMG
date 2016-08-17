const sequelize = require('../../models/index');
const System = sequelize.sequelize.models.systems;
const User = sequelize.sequelize.models.users;
const Biz = sequelize.sequelize.models.bizs;
const Base = sequelize.sequelize.models.bases;
const Event = sequelize.sequelize.models.events;

module.exports = (model) => {
    return async (ctx, next) => {
        let data = ctx.request.body;
        let newItem;
        switch (model) {
            case User: 
                newItem = {
                    account: data.account,
                    username: data.username,
                    password: data.password,
                    priority: data.priority
                };
                break;
            case Event: 
                newItem = {
                    date: data.date,
                    event: data.event,
                };
                break;
            case Biz: 
                newItem = {
                    column: data.column,
                    playStart: data.playStart,
                    playFinish: data.playFinish,
                    numOfNeeds: data.numOfNeeds,
                    allReadyTime: data.allReadyTime,
                    state: data.state
                };
                break;
            case Base:
                newItem = {
                    date: data.date,
                    subsystem: data.subsystem,
                    supervisor_1: data.supervisor_1,
                    supervisor_2: data.supervisor_2,
                    supervisor_3: data.supervisor_3,
                    respector: data.respector,
                    experiment: data.experiment,
                    IP: data.IP,
                    type: data.type,
                    work: data.work,
                    category: data.category,
                    stateOrData: data.stateOrData,
                    More: data.More
                };
                break;
              default: 
                break;
        }
        try {
            let newSystem = await System.findOne({where: {id: data.system}}).then((system) => {
                console.log(system)
                return system
            })
            let newOne;
            switch (model) {
                case Biz:
                    newOne = await newSystem.createBiz(newItem);
                    break;
                case Event:
                    newOne = await newSystem.createEvent(newItem);
                    break;
                case Base:
                    newOne = await newSystem.createBase(newItem);
                    break;
                default:
                    break;
            }
            ctx.body = {code: 1, err: "", add: newOne};
        } catch (err) {
            console.log(err);
            ctx.body = {code: 0, err: "something wrong with the server"}
        }
    }
}