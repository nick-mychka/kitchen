import shelfRepository from '../../data/repositories/shelfRepository';

const {
  getShelves,
  getShelfById,
  addShelf,
  updateShelf,
  deleteShelf
} = shelfRepository();

export {
  getShelves,
  getShelfById,
  addShelf,
  updateShelf,
  deleteShelf
};
