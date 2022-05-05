import React from 'react';

const Products = (props) => {
    const { _id, picture, name, price } = props.product;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title">{name}</h5>
                    {/* <p className="card-text">{price}</p> */}
                    <p> price: {price}</p>
                    {/* <a href=" " onClick={() => handleServiceDetail(_id)} className="btn btn-primary">About Service</a> */}
                </div>
            </div>

        </div>
    );
};

export default Products;