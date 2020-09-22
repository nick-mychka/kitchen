import Dashboard from './containers/Dashboard';

import Store from './containers/Store';
import Tables from './containers/Tables';
import Orders from './containers/Orders';
import Recipes from './containers/Recipes';

export default [
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard,
  },
  {
    path: '/store',
    exact: true,
    component: Store,
  },
  {
    path: '/tables',
    exact: true,
    component: Tables,
  },
  {
    path: '/orders',
    exact: true,
    component: Orders,
  },
  {
    path: '/recipes',
    exact: true,
    component: Recipes,
  },
];
