import React from 'react';
// import T from 'prop-types';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="container">
        <div className="row row-cols-1">
          <div className="col">
            <h1 className="h1">Kitchen</h1>
          </div>
        </div>
        <div className="row row-cols-1 mb-3">
          <div className="col">
            <nav>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </nav>
          </div>
        </div>
        <div className="row row-cols-4">
          <div className="col">
            <div className="card text-center py-5 shadow-sm">
              <NavLink to="/store">Store</NavLink>
            </div>
          </div>
          <div className="col">
            <div className="card text-center py-5 shadow-sm">
              <NavLink to="/tables">Tables</NavLink>
            </div>
          </div>
          <div className="col">
            <div className="card text-center py-5 shadow-sm">
              <NavLink to="/orders">Orders</NavLink>
            </div>
          </div>
          <div className="col">
            <div className="card text-center py-5 shadow-sm">
              <NavLink to="/recipes">Recipes</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
