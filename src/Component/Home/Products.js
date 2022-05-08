import React from 'react';

const Products = (props) => {
    const { _id, feature, quantity, picture, name, price, email } = props.product;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img style={{ height: '380px' }} src={picture} className="card-img-top" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title">{name}</h5>
                    <p className='mb-0'> price: {price}</p>
                    <p>quantity:{quantity}</p>
                    <p>feature: {feature}</p>
                    <p className='text-danger'>phone add by: <br /><span>{email}</span></p>
                </div>
            </div>

        </div>
    );
};

export default Products;