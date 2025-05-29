import React from 'react'

const Greeting = ({timeOfDay}) => {

    const name = 'Blessing'
    const today = new Date()
    const formattedDate = today.toLocaleDateString("en-US")

    const product = {
        productName: 'laptop',
        price: 100000,
        availability: 'in stock'
    }

  return (
    <div>
        <h1> Hello {name}!</h1>
        <p> Today's date is: {formattedDate}</p>
        <h2>The Products we have are listed below</h2>
        <p> Name: {product.productName}</p>
        <p> price: {product.price}</p>
        <p> availability: {product.availability}</p>
        {timeOfDay === "morning" ? (<h3>Good morning</h3>) : (<h3>Good afternoon</h3>)}
    </div>
  )
}

export default Greeting