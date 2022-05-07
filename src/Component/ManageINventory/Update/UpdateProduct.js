import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams();
    const [phone, setPhone] = useState({});
    const url = `http://localhost:5000/products/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPhone(data)
            });
    }, [])


    const updatePhone = (event) => {
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const picture = event.target.picture.value;
        const feature = event.target.feature.value;
        const phone = { name, price, quantity, picture, feature };
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'PuT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(phone)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        window.alert('update your phone.')

    };
    return (
        <div>
            <h1>update your Phone:{phone.name} </h1>
            <div className='w-25 mx-auto border'>
                <div className='g-5 col-sm-12 col-md-6 col-lg-4 '>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={phone.picture} className="card-img-top" alt="..." />
                        <div className="card-body ">
                            <h5 className="card-title">{phone.name}</h5>
                            {/* <p className="card-text">{price}</p> */}
                            <p>email:{phone.email}</p>
                            <p> price: {phone.price}</p>
                            <p>feature: {phone.feature}</p>
                            <p>quantity: {phone.quantity}</p>
                            {/* <a href=" " onClick={() => handleServiceDetail(_id)} className="btn btn-primary">About Service</a> */}
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-50 mx-auto border m-3 rounded'>
                <h1>update information</h1>
                <form className='m-3 p-2 d-flex flex-column' onSubmit={updatePhone}>
                    <input placeholder='name' className='mb-2 rounded' type="text" name="name" id="" />
                    <input placeholder='price' className='mb-2 rounded' type="number" name='price' id='' />
                    <input placeholder='phone quantity' className='mb-2 rounded' type="number" name='quantity' id='' />
                    <input placeholder='picture link' className='mb-2 rounded' type="text" name='picture' id='' />
                    <textarea name="feature" id="" cols="3" rows="3"></textarea>
                    <input type="submit" value="update phone info" />
                </form>
            </div>

        </div>
    );
};

export default UpdateProduct;