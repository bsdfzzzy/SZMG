var router = require('koa-router')();
const sequelize = require('../../models/index');
const User = sequelize.sequelize.models.users;
const findAll = require('../utils/findAll');
const addOne = require('../utils/addOne');

router.get('/GETALL', findAll(User));

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

router.post('/login', async (ctx, next) => {
    let data = ctx.request.body;
    try {
        let user = await User.findOne({
            where: {
                account: data.account
            }
        });
        if (user && user.password === data.password) {
            ctx.cookies.set({account: data.account})
            ctx.status = 200
            console.log(ctx.cookies)
            ctx.body = {code: 1, admin: user.username}
        } else {
            ctx.throw(new Error("not match"))
        }
    } catch (err) {
        ctx.throw(err)
    }
});

router.get('/logout', async (ctx, next) => {
    ctx.body = {code: 1}
})

module.exports = router;