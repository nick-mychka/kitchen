const Shelf = require('../models/shelf');

exports.createShelf = (req, res, next) => {
  Shelf.create(req.body)
    .then(shelf => {
      res.json({ data: shelf });
    })
    .catch(err => {
      console.log('exports.createShelf', err);
    });
};

exports.updateShelf = (req, res, next) => {
  const { body, params: { id } } = req;

  Shelf.update(body, { where: { id } })
    .then(() => Shelf.findByPk(id))
    .then(shelf => {
      res.json({ data: shelf });
    })
    .catch(err => {
      console.log('exports.updateShelf', err);
    });
};

exports.deleteShelf = (req, res, next) => {
  const { params: { id } } = req;

  Shelf.destroy({ where: { id } })
    .then(() => {
      res.json({ data: { id } });
    })
    .catch(err => {
      console.log('exports.deleteShelf', err);
    });
};

exports.getShelves = (req, res, next) => {
  Shelf.findAll()
    .then(shelves => {
      res.json({ data: shelves });
    })
    .catch(err => {
      console.log('exports.getShelves', err);
    });
};

exports.getShelfById = (req, res, next) => {
  const { params: { id } } = req;

  Shelf.findByPk(id)
    .then(shelf => {
      res.json({ data: shelf });
    })
    .catch(err => {
      console.log('exports.getShelfById', err);
    });
};
