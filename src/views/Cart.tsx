import { useSelector } from 'react-redux';
import Card from '../components/Card';
import { RootState } from '../store/store';

const Cart = () => {
  const { totalPrice } = useSelector((state: RootState) => state.cart);

  return (
    <Card className="w-full flex items-center justify-center">
      <div className="p-4 space-y-2">
        <p className="font-bold">Total Price</p>
        <p>{totalPrice}</p>
      </div>
    </Card>
  );
};

export default Cart;
