import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../Hooks/useProducts';
import Products from './Home/Products';

const Store = () => {
    const [product] = useProducts();
    const navigate = useNavigate();
    const allPhoneNavigation = () => {
        navigate('/phones')
    }
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
                    <div className='m-3'>
                        <button onClick={allPhoneNavigation} className='btn btn-dark'>more phones</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Store;