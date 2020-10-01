import React, { useCallback, useEffect, useState } from 'react';
import T from 'prop-types';

import CreateShelfForm from '../../components/CreateShelfForm';
import api from '../../api/index'

const CreateShelfFormContainer = () => {
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
    
    api.post('/shelf', {
      ...state
    })
    .then((res) => {
      setState({
        name: '',
        description: ''
      })
      console.log('response', res)
    })
    .catch((err) => console.log('error', err.message))

    // api.get('/shelves')
    // .then((res) => console.log('response', res))
    // .catch((err) => console.log('error', err.message))
  }

  return (
    <CreateShelfForm
      state={state}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
}

CreateShelfFormContainer.propTypes = {};

export default CreateShelfFormContainer;