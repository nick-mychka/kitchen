/* eslint-disable no-unused-vars */
const Shelf = require('../models/shelf');

exports.getShelves = (req, res, next) => {
  Shelf.findAll()
    .then(shelves => {
      res.json({ data: shelves });
    })
    .catch(err => console.log('exports.getShelves', err));
};

// exports.getProjectById = (req, res, next) => {
//   const { id } = req.params;

//   Project.findByPk(id)
//     .then(project => {
//       res.json({ data: project });
//     })
//     .catch(err => console.log('exports.getProjectById', err));
// };

// eslint-disable-next-line no-unused-vars
exports.createShelf = (req, res, next) => {
  Shelf.create(req.body)
    .then(shelf => {
      res.json({ data: shelf });
    })
    .catch(err => console.log('exports.createShelf', err));
};

// exports.updateProject = (req, res, next) => {
//   const { name } = req.body;
//   const { id } = req.params;

//   Shelf.update({ name }, {
//     where: { id }
//   })
//     .then(() => Project.findByPk(id))
//     .then(project => res.json({ data: project }))
//     .catch(err => console.log('exports.updateProject', err));
// };

// exports.deleteProject = (req, res, next) => {
//   const { id } = req.params;

//   Project.destroy({ where: { id } })
//     .then(() => res.json({ data: { id } }))
//     .catch(err => console.log('exports.deleteProject', err));
// };
