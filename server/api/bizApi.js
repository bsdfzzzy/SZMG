var router = require('koa-router')();
const sequelize = require('../../models/index');
const Biz= sequelize.sequelize.models.bizs;
const findAll = require('../utils/findAll');
const addOne = require('../utils/addOne');

router.get('/getAll', findAll(Biz));
router.post('/addOne', addOne(Biz));

module.exports = router;