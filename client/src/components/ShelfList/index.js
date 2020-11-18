import React from 'react'
import T from 'prop-types'

const ShelfList = ({shelves, handleDelete, handleUpdate}) => {
  return (
    <>
      {shelves && shelves.map(({id, name, description}) => (
        <div className="card w-25 shadow m-2">
          <div key={id} className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text text-truncate">{description}</p>
            <div>
              <button 
                className="btn btn-success mr-2"
                onClick={() => handleUpdate(id)}
              >
                Edit
              </button>
              <button 
                className="btn btn-danger"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

ShelfList.propTypes = {
  shelves: T.arrayOf(T.object),
  handleDelete: T.func.isRequired,
  handleUpdate: T.func.isRequired,
}

export default ShelfList
