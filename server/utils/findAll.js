module.exports = (model) => {
    return async (ctx, next) => {
        let items;
        try {
            items = await model.findAll();
            ctx.body = items;
        } catch(e) {
            console.log(e);
            ctx.throw(500);
        }
    }
}