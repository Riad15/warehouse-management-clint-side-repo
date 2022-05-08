import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Products from '../Home/Products';

const AllProducts = () => {
    const [product, setProduct] = useProducts();
    console.log(product);
    return (
        <div>
            <h3 className='title'>Store Products</h3>
            <div className='container mt-3 ' >
                <div className='row '>
                    {
                        product.map(data => <Products
                            key={data._id}
                            product={data}
                        ></Products>)
                    }

                </div>

            </div>


        </div>
    );
};

export default AllProducts;