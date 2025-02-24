import Banner from '@components/Banner';
import Products from '@components/Products';
import { FC, ReactElement } from 'react';
import { Toaster } from 'react-hot-toast';

const Home: FC = (): ReactElement => {
  return (
    <div className="flex flex-col min-h-screen flex-grow bg-opacity-50">
      <Banner />
      <Products />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Home;
