var router = require('koa-router')();
const sequelize = require('../../models/index');
const Event= sequelize.sequelize.models.events;
const findAll = require('../utils/findAll');
const addOne = require('../utils/addOne');

router.get('/getAll', findAll(Event));
router.post('/addOne', addOne(Event));

module.exports = router;