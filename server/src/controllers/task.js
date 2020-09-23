const Task = require('../models/task');

// eslint-disable-next-line no-unused-vars
exports.getTasks = (req, res, next) => {
  const { id } = req.params;
  Task.findAll({
    where: {
      project_id: id
    }
  })
    .then(tasks => {
      res.json({ data: tasks });
    })
    .catch(err => console.log('exports.getTasks', err));
};

// eslint-disable-next-line no-unused-vars
exports.createTask = (req, res, next) => {
  Task.create(req.body)
    .then(task => {
      res.json({ data: task });
    })
    .catch(err => console.log('exports.createTask', err));
};
