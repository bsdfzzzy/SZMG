module.exports = (model) => {
    return async (ctx, next) => {
        let items;
        try {
            items = await model.findAll();
            items.map((item) => {
                if (item.date) {
                    item.date = item.date.getTime()
                }
            })
            ctx.body = items;
        } catch(e) {
            console.log(e);
            ctx.throw(500);
        }
    }
}