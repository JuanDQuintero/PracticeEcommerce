import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import { RootState } from '../store/store';
import Item from './Item';

const ItemCart: FC = (): ReactElement => {
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <div className="flex items-center flex-col gap-4">
      {items.map((item) => {
        return (
          <div key={item.id} className="flex justify-center min-w-min">
            <Item {...item} inCart />
            <Card className="flex flex-col gap-2 p-6 mr-10">
              <span className="text-xl">{item.title}</span>
              <span>{item.description.toUpperCase()}</span>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCart;
