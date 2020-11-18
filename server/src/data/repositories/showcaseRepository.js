import { ShowcaseModel } from '../models';
import baseRepository from './baseRepository';

const showcaseRepository = () => {
  const { getAll, getById, create, updateById, deleteById } = baseRepository(ShowcaseModel);

  return {
    getShowcases: getAll,
    getShowcaseById: getById,
    addShowcase: create,
    updateShowcase: updateById,
    deleteShowcase: deleteById
  };
};

export default showcaseRepository;
