import React, { useEffect, useState } from 'react';

import Store from '../../components/Store';
import { createShelf, deleteShelf, getShelves, updateShelf } from '../../api';

const DashboardContainer = () => {
  const [shelves, setShelves] = useState([]);
  const [mode, setMode] = useState('create')
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
    
    if (mode === 'update') {
      updateShelf(shelfInfo).then((res) => {
        const updatedShelf = res.data.data;
        const filteredShelves = shelves.filter(({id}) => id !== updatedShelf.id)

        setShelves([
          ...filteredShelves,
          updatedShelf
        ])
        setShelfInfo({
          name: '',
          description: ''
        });
        setMode('create')
      })
      .catch((err) => {
        throw new Error(`error ${err.message}`)
      })
    } 

    if (mode === 'create') {
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
  }

  const handleShelfDelete = (shelfId) => {
    const updatedShalves = shelves.filter(({id}) => id !== shelfId);

    deleteShelf(shelfId)
    .then(() => {
      setShelves(updatedShalves)
    })
  }

  const handleShelfUpdate = (shelfId) => {
    const shelfInfo = shelves.find(({id}) => id === shelfId);

    setMode('update')
    setShelfInfo(shelfInfo);
  }

  return (
    <Store
      mode={mode}
      shelves={shelves}
      shelfInfo={shelfInfo}
      onChange={handleInputChange}
      onSubmit ={handleSubmit}
      handleDelete={handleShelfDelete}
      handleUpdate={handleShelfUpdate}
    />
  )
};

export default DashboardContainer;
