const router = require('express').Router();

const home = require('./home');
const login = require('./login');
const signup = require('./signup');
const { client, server } = require('./error');
const { addList, addItem, markAsDone } = require('./postData');

router.get('/', home);

router.get('/login', login.get);
router.get('/signup', signup.get);

router.post('/login', login.post);
router.post('/signup', signup.post);

router.post('/addList', addList);
router.post('/addItem', addItem);
router.post('/markAsDone', markAsDone);

router.all('*', client);
router.use(server);

module.exports = router;
