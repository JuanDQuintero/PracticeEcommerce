import React from 'react'
import { ProductType } from '../types/product'
import Card from './Card';

const Product: React.FC<ProductType> = ({ id, title, price, description, image }) => {
  return (
    <Card>
      <div className='border-b-2 p-2'>
        <a href="">
          <img src={image} alt={title} />
        </a>
      </div>
      <div className='p-4 space-y-2'>
        <p className='font-bold'>{title}</p>
        <p>{price}</p>
      </div>
    </Card>
  )
}

export default Product;
