const sequelize = require('../../models/index');
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
                    system: data.system,
                    event: data.event,
                };
                break;
            case Biz: 
                newItem = {
                    system: data.system,
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
                    system: data.system,
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
        }
        try {
            let newOne = await model.create(newItem);
            ctx.body = {code: 1, message: "success added", add: newOne};
        } catch (err) {
            console.log(err);
            ctx.throw(500);
        }
    }
}