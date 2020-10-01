import React, { useEffect, useState } from 'react';
import T from 'prop-types';

import Store from '../../components/Store';
import { createShelf, deleteShelf, getShelves } from '../../api';

const DashboardContainer = () => {
  const [shelves, setShelves] = useState([]);
  const [shelfInfo, setShelfInfo] = useState({
    name: '',
    description: ''
  });

  useEffect(() => {
    getShelves().then((res) => {
      const shelves = res.data.data;
      setShelves(shelves)
    })
    .catch((err) => {
      throw new Error(`error ${err.message}`)
    })
  }, [])

  const handleInputChange = (e) => {
    const {name, value} = e.target;

    setShelfInfo((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    createShelf(shelfInfo)
    .then((res) => {
      const newShelf = res.data.data;

      setShelfInfo({
        name: '',
        description: ''
      });
      setShelves((prevState) => ([
        ...prevState,
        newShelf
      ]))
    })
    .catch((err) => {
      throw new Error(`error: ${err.message}`)
    })
  }

  const handleShelfDelete = (shelfId) => {
    const updatedShalves = shelves.filter(({id}) => id !== shelfId);

    deleteShelf(shelfId)
    .then(() => {
      setShelves(updatedShalves)
    })
  }

  return (
    <Store
      shelves={shelves}
      shelfInfo={shelfInfo}
      onChange={handleInputChange}
      onSubmit ={handleSubmit}
      handleDelete={handleShelfDelete}
    />
  )
};

DashboardContainer.propTypes = {};

export default DashboardContainer;
