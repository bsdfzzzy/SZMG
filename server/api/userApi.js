var router = require('koa-router')();
const sequelize = require('../../models/index');
const User = sequelize.sequelize.models.users;
const findAll = require('../utils/findAll');
const addOne = require('../utils/addOne');

router.get('/getAll', findAll(User));

router.post('/addOne', addOne(User));

router.put('/changePass', async (ctx, next) => {
    let data = ctx.request.body;
    let newPass = {
        password: data.password
    };
    try {
        let newOne = await User.update(newPass, {
            where: {
                account: {
                    in: [data.account]
                } 
            }
        });
        ctx.body = {code: 1, message: "success update", update: newOne};
    } catch (err) {
        console.log(err);
        ctx.throw(err);
    }
});

module.exports = router;