const express = require('express');
const router = express.Router();

const {list,create,update,destroy,addStudent} = require('../controllers/classRoomController');

router.get('/',list);

router.post('/', create);

router.put('/:id', update);

router.delete('/:id', destroy);

router.put('/addStudent',addStudent)

module.exports = router
