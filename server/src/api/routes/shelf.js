import { Router } from 'express';
import * as shelfService from '../services/shelfService';

const router = Router();
const { getShelves, getShelfById, addShelf, updateShelf, deleteShelf } = shelfService;

router
  .get('/', (req, res, next) => getShelves()
    .then(shelves => {
      res.json({ data: shelves });
    })
    .catch(next))

  .get('/:id', ({ params: { id } }, res, next) => getShelfById(id)
    .then(shelf => {
      res.json({ data: shelf });
    })
    .catch(next))

  .post('/', ({ body }, res, next) => addShelf(body)
    .then(shelf => {
      res.json({ data: shelf });
    })
    .catch(next))

  .put('/:id', ({ body, params: { id } }, res, next) => updateShelf(id, body)
    .then(() => getShelfById(id))
    .then(shelf => {
      res.json({ data: shelf });
    })
    .catch(next))

  .delete('/:id', ({ params: { id } }, res, next) => deleteShelf(id)
    .then(() => {
      res.json({ data: { id } });
    })
    .catch(next));

export default router;
