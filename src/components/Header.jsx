import { useState }  from 'react'


const Header = () => {

    const [count, setCount] = useState(0)
    const handleAdd =()=>{
        setCount(count + 1)
    }
    const handleSubstract =()=>{
        setCount(count - 1)
        
    }
    
  return (
   <div>
    <h1>{count}</h1>
    <button onClick={handleAdd}>+</button>
    <button onClick={handleSubstract}>-</button>
   </div>
  )
}

export default Header