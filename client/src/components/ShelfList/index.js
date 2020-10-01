import React from 'react'
import T from 'prop-types'

const ShelfList = ({shelves}) => {
  return (
    <div>
      <ul>
        {shelves && shelves.map(({id, name, description}) => (
          <li key={id}>
            <div>name: {name}</div>
            <div>description: {description}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

ShelfList.propTypes = {
  shelves: T.arrayOf(T.object)
}

export default ShelfList
