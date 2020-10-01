import React, { useEffect, useState } from 'react'
import T from 'prop-types'
import ShelfList from '../../components/ShelfList';
import { getShelves } from '../../api';

const ShelfLlistContainer = () => {
  const [shelves, setShelves] = useState([]);

  useEffect(() => {
    getShelves()
    .then((res) => {
      const shelves = res.data;
      setShelves(shelves.data)
    })
    .catch((err) => {
      throw new Error(`error ${err.message}`)
    })
  }, [shelves])

  return (
    <ShelfList shelves={shelves}/>
  )
}

ShelfLlistContainer.propTypes = {};

export default ShelfLlistContainer;

