var router = require('koa-router')();
const sequelize = require('../../models/index');
const Base= sequelize.sequelize.models.bases;
const findAll = require('../utils/findAll');
const addOne = require('../utils/addOne');

router.get('/GETALL', findAll(Base));
router.post('/addOne', addOne(Base));

module.exports = router;