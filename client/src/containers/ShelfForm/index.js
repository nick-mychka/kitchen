import React, {useState } from 'react';
import T from 'prop-types';

import ShelfForm from '../../components/ShelfForm';
import { createShelf } from '../../api/index';

const ShelfFormContainer = () => {
  const [state, setState] = useState({
    name: '',
    description: ''
  });

  const onChange = (e) => {
    const {name, value} = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    createShelf(state)
    .then(() => {
      setState({
        name: '',
        description: ''
      })
    })
    .catch((err) => console.log('error', err.message))
  }

  return (
    <ShelfForm
      state={state}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
}

ShelfFormContainer.propTypes = {};

export default ShelfFormContainer;