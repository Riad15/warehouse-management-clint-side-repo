import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = 'http://localhost:5000/products';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        window.alert('add your phone.')

    };
    return (
        <div className='w-50 mx-auto border m-3 rounded'>
            <h1>add New Phone</h1>
            <form className='m-3 p-2 d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' className='mb-2 rounded' {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='price' className='mb-2 rounded' type="number" {...register("price",)} />
                <input placeholder='picture link' className='mb-2 rounded' {...register("picture", { required: true, })} />
                <input placeholder='phone quantity' className='mb-2 rounded' type="number" {...register("quantity",)} />
                <textarea placeholder='phone feature' className='mb-2 rounded' {...register("feature", { required: true, maxLength: 80 })} />
                <input type="submit" value='Add Product' />
            </form>
        </div>
    );
};

export default AddProduct;