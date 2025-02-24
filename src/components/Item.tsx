import { FC, ReactElement } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToCart, removeToCart } from '../store/features/cartSlice';
import { CartProduct } from '../types/cart';
import Card from './Card';

const Item: FC<CartProduct> = (props): ReactElement => {
  const {
    id = 0,
    title = '',
    price = 0,
    description = '',
    image = '',
    category = '',
    quantity = 0,
    inCart = false,
  } = props;
  const dispatch = useDispatch();

  const addItem = (event: any) => {
    dispatch(
      addToCart({ id, title, price, description, image, category, quantity: 1 })
    );
    toast.success(`${title} added to Cart 🛒`);
    event.preventDefault();
  };

  const removeItem = (event: any) => {
    event.preventDefault();
    dispatch(removeToCart({ id }));
    toast.success(`${title} removed to Cart 🛒`);
  };

  if (inCart) {
    return (
      <Card className="w-fit hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
        <div className="border-b-2 p-2 flex items-center justify-center">
          <img src={image} alt={title} width={200} className="max-w-fit" />
        </div>
        <div className="p-4 space-y-2">
          <p className="font-bold">{title}</p>
          <p>{price}$</p>
          <div className="flex justify-between items-center">
            <span>Amount: {quantity}</span>
            <div className="flex gap-2">
              <button onClick={addItem} className="hover:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
              <button onClick={removeItem} className="hover:text-red-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="h-fit flex justify-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 max-w-full min-w-fit">
      <button onClick={addItem}>
        <div className="border-b-2 p-2 flex items-center justify-center ">
          <img src={image} alt={title} width={200} className="max-w-full" />
        </div>
        <div className="p-4 space-y-2">
          <p className="font-bold">{title}</p>
          <p>{price}$</p>
          {quantity > 1 && <p>Amount: {quantity}</p>}
        </div>
      </button>
    </Card>
  );
};

export default Item;
