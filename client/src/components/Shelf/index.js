import React from 'react';
import T from 'prop-types';

const Shelf = ({name, description}) => {
  return (
    <div>
      <h1>Shelf</h1>
      <div>name: {name}</div>
      <div>description: {description}</div>
    </div>
  )
}

Shelf.propTypes = {};

export default Shelf;