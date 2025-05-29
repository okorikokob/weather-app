const MapList = () => {
  const users = [
    { id: 1, name: "Alice", age: "7months" },
    { id: 2, name: "Blessing", age: 32 },
    { id: 3, name: "Tobi", age: 33 },
  ];

  const products = [
    {
      id: 1,
      productName: "laptop",
      price: 100000,
      availability: "in stock",
    },
    {
      id: 2,
      productName: "phone",
      price: 20000,
      availability: "out of stock",
    },
    {
      id: 3,
      productName: "tablet",
      price: 500000,
      availability: "in stock",
    },
  ];
  return (
    <div>
      <p>
      {users.map((user) => (
        <ul key={user.id}>
          <li>
            {user.name}: {user.age}
          </li>
        </ul>
      ))}
      </p>
      <p>
        {products.map(product =>(
         <div key={product.id}>
          <div>
            <h4>{product.productName}: {product.price}</h4>
           
          </div>
         </div>
        ))}
      </p>
    </div>
  );
};

export default MapList;
