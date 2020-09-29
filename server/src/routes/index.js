const express = require('express');

const shelfController = require('../controllers/shelf');
// const taskController = require('../controllers/task');

const router = express.Router();

// Shelves
router.get('/shelves', shelfController.getShelves);
router.post('/shelf', shelfController.createShelf);
router.put('/shelf/:id', shelfController.updateShelf);
router.delete('/shelf/:id', shelfController.deleteShelf);
router.get('/shelves/:id', shelfController.getShelfById);

// Tasks
// router.get('/project/:id/tasks', taskController.getTasks);

module.exports = router;
