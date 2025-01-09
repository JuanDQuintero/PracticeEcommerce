import React from 'react'

const Card: React.FC = ({children}) => {
  return (
    <div className='bg-white shadow-md rounded-md w-100'>
      {children}
    </div>
  )
}



export default Card;
