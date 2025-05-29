import React from 'react'

const Person = ({name, age, product, price}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>{age}</p>
        <p>{product}</p>
        <p>{price}</p>
    </div>
  )
}

export default Person