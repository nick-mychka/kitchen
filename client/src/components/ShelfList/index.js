import React from 'react'
import T from 'prop-types'

const ShelfList = ({shelves, handleDelete, handleUpdate}) => {
  return (
    <div>
      <ul>
        {shelves && shelves.map(({id, name, description}) => (
          <li key={id} className="shadow p-2 mb-3">
            <div>name: {name}</div>
            <div>description: {description}</div>
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
          </li>
        ))}
      </ul>
    </div>
  )
}

ShelfList.propTypes = {
  shelves: T.arrayOf(T.object),
  handleDelete: T.func.isRequired,
  handleUpdate: T.func.isRequired,
}

export default ShelfList
