const router = require('express').Router();
const TaskControllers = require('../controllers/tasks');


//find all tasks
router.get('/', TaskControllers.index);

//craete new task
router.post('/create', TaskControllers.create);

// update a task
router.get('/update/:id', TaskControllers.edit);
router.put('/update/:id', TaskControllers.update);

//delete task
router.delete('/delete/:id', TaskControllers.delete);

module.exports = router;