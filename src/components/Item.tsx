import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/features/cartSlice';
import { Product } from '../types/cart';
import Card from './Card';

const Item: React.FC<Product> = ({
  id,
  title,
  price,
  description,
  image,
  category,
}) => {
  const dispatch = useDispatch();

  const handleItem = (event: any) => {
    dispatch(
      addToCart({ id, title, price, description, image, category, quantity: 1 })
    );
    event.preventDefault();
  };
  return (
    <Card>
      <button onClick={handleItem}>
        <div className="border-b-2 p-2">
          <a href="">
            <img src={image} alt={title} width={200} className="max-w-fit" />
          </a>
        </div>
        <div className="p-4 space-y-2">
          <p className="font-bold">{title}</p>
          <p>{price}</p>
        </div>
      </button>
    </Card>
  );
};

export default Item;
