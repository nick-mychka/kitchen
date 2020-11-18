import React from 'react';
// import T from 'prop-types';
import { NavLink } from 'react-router-dom';

import ShelfForm from '../ShelfForm';
import ShelfList from '../ShelfList';
import Modal from '../Modal';

const Store = ({shelves, shelfInfo, mode, isOpen, onChange, onSubmit, handleModal, handleDelete, handleUpdate}) => {
  return (
    <>
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
          <div className="col">
            <div className="d-flex justify-content-between">
              <h2 className="text-left">Shelf List</h2>
              <div className="text-right">
                <button
                  className="btn btn-primary"
                  onClick={() => handleModal(true)}
                >
                  Create Shelf
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col row-cols-1">
            <section className="d-flex flex-wrap justify-content-center my-2">
              <ShelfList
                shelves={shelves}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            </section>
          </div>
        </div>
        <hr/>
      </div>
    </div>
    <Modal
      isOpen={isOpen}
      handleModal={handleModal}
    >
      <ShelfForm
        mode={mode}
        shelfInfo={shelfInfo}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </Modal>
  </>
  );
};

Store.propTypes = {
  mode: T.string.isRequired,
  isOpen: T.bool.isRequired,
  onSubmit: T.func.isRequired,
  onChange: T.func.isRequired,
  handleModal: T.func.isRequired,
  handleDelete: T.func.isRequired,
  handleUpdate: T.func.isRequired,
  shelves: T.arrayOf(T.object).isRequired,
  shelfInfo: T.objectOf(T.any).isRequired,
};

export default Store;
