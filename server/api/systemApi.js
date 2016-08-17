var router = require('koa-router')();
const sequelize = require('../../models/index');
const System = sequelize.sequelize.models.systems;
const findAll = require('../utils/findAll');
const addOne = require('../utils/addOne');

router.get('/GETALL', findAll(System));
router.post('/addOne', addOne(System));

module.exports = router;