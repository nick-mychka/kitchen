import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './assets/scss/main.scss';

import routes from './routes';

function App() {
  return (
    <div className="root-container">
      <Switch>
        {routes.map(({ path, exact, component }) => (
          <Route key={path} path={path} exact={exact} component={component} />
        ))}
        <Redirect to="/dashboard" />
      </Switch>
    </div>
  );
}

export default App;
