import React from 'react'

const Weather = ({temperature}) => {
    
    
  return (

    <div>
        {temperature <15 && <p>it is cold outside</p>}
        {temperature >=16 && temperature <=25 && <p>it is normal</p>}
        {temperature >25 && <p>it is hot outside</p>}
    </div>
  )
}

export default Weather