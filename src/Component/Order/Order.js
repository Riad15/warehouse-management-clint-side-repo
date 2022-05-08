import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UsePhone from '../../Hooks/UsePhone';

const Order = () => {
    const { id } = useParams();
    const [phone] = UsePhone();


    const increase = (c) => {
        const newCount = c + 1;
        const updateQuantity = { newCount };
        const url = `http://localhost:5000/quantity/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })


    }
    const decrease = () => {

    }

    console.log(id);

    return (
        <div>
            <h1>quantity</h1>
            <div className='w-50 mx-auto border'>
                <div className='g-5 col-sm-12 col-md-6 col-lg-4 mx-auto'>
                    <div className="card" style={{ width: "14rem" }}>
                        <img src={phone.picture} className="card-img-top" alt="..." />
                        <div className="card-body ">
                            <h5 className="card-title">{phone.name}</h5>
                            <p> price: {phone.price}</p>
                            <h3>quantity: {phone.quantity}</h3>
                            {/* <a href=" " onClick={() => handleServiceDetail(_id)} className="btn btn-primary">About Service</a> */}
                        </div>
                    </div>

                </div>
                <div>
                    <button onClick={() => increase(phone.quantity)} className='btn btn-dark m-1'>increase</button>
                    <button onClick={decrease} className='btn btn-dark m-1'>decrease</button>
                </div>
            </div>


        </div>
    );
};

export default Order;