import Product from './../components/Product';
import React, { useEffect, useState } from 'react'
import { ProductType } from 'types/product';

const Home: React.FC = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loader, setLoader] = useState<boolean>(false);

    useEffect(() => {
        setLoader(true);
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> setProducts(json))
        .finally(()=>setLoader(false))
    }, [])

  return (
    <div className='flex flex-col min-h-screen flex-grow'>
        <img src='/src/assets/image.png' alt='Banner' className='w-full' />
        <div className='mx-80 p-6'>
          {loader ? <p>Loading...</p> :
            <>
              <h2 className='font-bold text-lg pb-8 text-gray-800'>New Products!!</h2> 
              <div className='grid grid-cols-3 gap-4'>
                {products.map(product => {
                  if (product.category === `men's clothing`) {
                    return <div className='col-span-1'>
                      <h2>{product.category.toUpperCase()}</h2>
                      <Product key={product.id} {...product}/>
                    </div>
                  }
                  if (product.category === `women's clothing`) {
                    return <div className='col-span-1'>
                      <h2>{product.category.toUpperCase()}</h2>
                      <Product key={product.id} {...product}/>
                    </div>
                  }
                  if (product.category === `electronics`) {
                    return <div className='col-span-1'>
                      <h2>{product.category.toUpperCase()}</h2>
                      <Product key={product.id} {...product}/>
                    </div>
                  }
                  })}
              </div>
            </>
          }
        </div>
    </div>
  )
}

export default Home
