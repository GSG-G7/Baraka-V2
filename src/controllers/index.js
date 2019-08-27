const router = require('express').Router();

const { client, server } = require('./error');
const { get } = require('./home');
// const { addList, addItem } = require('./postData');

router.get('/', get);
// router.post('/addList', addList);
// router.post('/addItem', addItem);

router.all('*', client);
router.use(server);

module.exports = router;
