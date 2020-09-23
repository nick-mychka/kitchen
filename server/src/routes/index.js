const express = require('express');

const shelfController = require('../controllers/shelf');
// const taskController = require('../controllers/task');

const router = express.Router();

// Shelves
router.get('/shelves', shelfController.getShelves);
// router.get('/projects/:id', projectController.getProjectById);
router.post('/project', shelfController.createShelf);
// router.put('/project/:id', projectController.updateProject);
// router.delete('/project/:id', projectController.deleteProject);

// Tasks
// router.get('/project/:id/tasks', taskController.getTasks);

module.exports = router;
