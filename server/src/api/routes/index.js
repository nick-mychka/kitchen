import showcaseRoutes from './showcase';
import shelfRoutes from './shelf';

export default app => {
  app.use('/api/showcases', showcaseRoutes);
  app.use('/api/shelves', shelfRoutes);
};

