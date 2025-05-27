import styled from 'styled-components';
import { useState } from 'react';


const Cart = ({img, brand, color, size, material, price, } ) => {
    const [isAvailable, setisAvailable] = useState(true)

    const handleButton =()=>{
        setisAvailable(false)
    }
  return (
    <div>
      <Card>
        <div className="details">
          <img
            src={img}
            width="249"
            alt="Shirt Image"
          />
          <h3>Brand: {brand}</h3>
          <p>color: {color} </p>
          <strong>Price: {price}</strong>
          <p>Size: {size}</p>
          <p>Material:{material} </p>
          {isAvailable ? <ActiveButton onClick={handleButton}>Buy now</ActiveButton> :  < DisableButton disabled>Out of stock</DisableButton>}
          
         

        </div>
      </Card >
    </div>
  );
};

export default Cart;
const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  width: 250px;
  margin: 20px auto;
  border-radius: 5px;
`;



const ActiveButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
  margin: 5px;
  border: none;
  cursor: pointer;
`;

const DisableButton = styled.button`
  background-color: darkgreen;
  color: snow;
  padding: 10px;
  margin: 5px;
  border: none;
  cursor: not-allowed;
`;
