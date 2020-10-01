import React from 'react';
import T from 'prop-types';
import { NavLink } from 'react-router-dom';

import ShelfForm from '../ShelfForm';
import ShelfList from '../ShelfList';

const Store = ({shelves, shelfInfo, mode, onChange, onSubmit, handleDelete, handleUpdate}) => {
  return (
    <div className="dashboard-container">
      <div className="container">
        <div className="row row-cols-1">
          <div className="col">
            <h1 className="h1">Store</h1>
          </div>
        </div>
        <div className="row row-cols-1 mb-3">
          <div className="col">
            <nav>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </nav>
          </div>
        </div>
        <div className="row row-cols-1">
          <ul>
            <li className="mb-3">
              <u>Add shelf</u>: <br />
              <b>url</b>: /shelf, <br />
              <b>request</b>: name, description, <br />
              <b>result</b>: (id, name, description)
            </li>
            <li className="mb-3">
              <u>Edit shelf</u>: <br />
              <b>url</b>: /shelf/:id, <br />
              <b>request</b>: (name, description), <br />
              <b>result</b>: (id, name, description)
            </li>
            <li className="mb-3">
              <u>Delete shelf</u>: <br />
              <b>url</b>: /shelf/:id, <br />
              <b>result</b>: (id)
            </li>
            <li>
              <u>Get shelf</u>: <br />
              <b>url</b>: /shelves <br />
              <b>result</b>: <br />
              {JSON.stringify([
                { id: '1', name: 'Test 1', description: 'd' },
                { id: '2', name: 'Test 2', description: 'dw' },
              ])}
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ShelfForm
                mode={mode}
                shelfInfo={shelfInfo}
                onChange={onChange}
                onSubmit={onSubmit}
              />
            </div>
            <div className="col-12">
              <h2>Shelf List</h2>
              <ShelfList
                shelves={shelves}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Store.propTypes = {};

export default Store;
