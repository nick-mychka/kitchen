import { Router } from 'express';
import {
  getShowcases,
  getShowcaseById,
  addShowcase,
  updateShowcase,
  deleteShowcase
} from '../services/showcaseService';

const router = Router();

router
  .get('/', (req, res, next) => getShowcases()
    .then(showcases => {
      res.json({ data: showcases });
    })
    .catch(next))

  .get('/:id', ({ params: { id } }, res, next) => getShowcaseById(id)
    .then(showcase => {
      res.json({ data: showcase });
    })
    .catch(next))

  .post('/', ({ body }, res, next) => addShowcase(body)
    .then(showcase => {
      res.json({ data: showcase });
    })
    .catch(next))

  .put('/:id', ({ body, params: { id } }, res, next) => updateShowcase(id, body)
    .then(() => getShowcaseById(id))
    .then(showcase => {
      res.json({ data: showcase });
    })
    .catch(next))

  .delete('/:id', ({ params: { id } }, res, next) => deleteShowcase(id)
    .then(() => {
      res.json({ data: { id } });
    })
    .catch(next));

export default router;
