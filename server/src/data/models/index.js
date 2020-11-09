import associate from '../db/associations';

import Shelf from './shelf';
import Showcase from './showcase';

associate({
  Showcase,
  Shelf
});

export {
  Showcase as ShowcaseModel,
  Shelf as ShelfModel
};
