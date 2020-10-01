import React from 'react';
import T from 'prop-types';

const ShelfForm = ({shelfInfo: {name, description}, onChange, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">name</label>
        <input
          id="name" 
          type="text"
          value={name}
          name="name" 
          className="form-control" 
          placeholder="name"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">description</label>
        <textarea
          id="description" 
          type="text" 
          value={description}
          name="description"
          className="form-control" 
          placeholder="description"
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Create</button>
    </form>
  )
}

ShelfForm.propTypes = {
  description: T.string,
  name: T.string.isRequired,
  onChange: T.func.isRequired,
  onSubmit: T.func.isRequired
};

export default ShelfForm;