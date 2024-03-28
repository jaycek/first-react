import React from 'react'
import people from './people'

const List = () => {
    const chemists = people.filter(person => person.profession ==="chemist" )
    const listitems = chemists.map(person =><li key={person.id}>
        <p>{person.name}: {person.profession}</p>
        </li>)

  return (
    <div>
      <ul>
        {listitems}
      </ul>
    </div>
  )
}

export default List
