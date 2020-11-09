import { ShelfModel } from '../models';
import baseRepository from './baseRepository';

const shelfRepository = () => {
  const { getAll, getById, create, updateById, deleteById } = baseRepository(ShelfModel);

  return {
    getShelves: getAll,
    getShelfById: getById,
    addShelf: create,
    updateShelf: updateById,
    deleteShelf: deleteById
  };
};

export default shelfRepository;
