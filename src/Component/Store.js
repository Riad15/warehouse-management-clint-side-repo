import React from 'react';
import useProducts from '../Hooks/useProducts';
import Products from './Home/Products';

const Store = () => {
    const [product] = useProducts();
    return (
        <div id='services '>
            <h3 className='title'>Store Products</h3>
            <div className='container mt-3 ' >
                <div className='row '>
                    {
                        product.slice(0, 6).map(data => <Products
                            key={data._id}
                            product={data}
                        ></Products>)
                    }

                </div>

            </div>
        </div>
    );
};

export default Store;