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

Shelf.propTypes = {
  name: T.string.isRequired,
  description: T.string
};

export default Shelf;