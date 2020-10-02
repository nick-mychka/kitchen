import React, { useEffect, useState } from 'react';

import Store from '../../components/Store';
import { createShelf, deleteShelf, getShelves, updateShelf } from '../../api';

const DashboardContainer = () => {
  const [shelves, setShelves] = useState([]);
  const [mode, setMode] = useState('create');
  const [isModalOpen, setIsModalOpen] = useState(false);
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

        setMode('create');
        setIsModalOpen(false);
        setShelves([
          ...filteredShelves,
          updatedShelf
        ])
        setShelfInfo({
          name: '',
          description: ''
        });
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
    setIsModalOpen(true);
  }

  return (
    <Store
      mode={mode}
      isOpen={isModalOpen}
      shelves={shelves}
      shelfInfo={shelfInfo}
      onChange={handleInputChange}
      onSubmit ={handleSubmit}
      handleDelete={handleShelfDelete}
      handleUpdate={handleShelfUpdate}
      handleModal={setIsModalOpen}
    />
  )
};

export default DashboardContainer;
