const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.send('User List');
});
router.get('/new', (req, res) =>{
    res.send('New User Form');
});

router.route(":/id").get((req, res) => {
    res.send(`Getting User data: ${req.params.id}`);
}).delete((req, res) => {
    res.send(`Deleting user with id: ${req.params.id}`);
}).put((req, res) => {
    res.send(`Upadting user with id: ${req.params.id}`);
});

router.post('/', (req, res) => {

});

router.param("id", (req, res, next, id)=>{
    console.log(`Accessing user #${id}`);
    next();
});

module.exports = router;