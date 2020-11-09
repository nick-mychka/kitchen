import showcaseRepository from '../../data/repositories/showcaseRepository';

const {
  getShowcases,
  getShowcaseById,
  addShowcase,
  updateShowcase,
  deleteShowcase
} = showcaseRepository();

export {
  getShowcases,
  getShowcaseById,
  addShowcase,
  updateShowcase,
  deleteShowcase
};
