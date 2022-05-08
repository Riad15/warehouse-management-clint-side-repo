import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useProducts from '../../Hooks/useProducts';

const ManageInventory = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth)
    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/myitems?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyItems(data)
            })

    }, [user])
    const navigate = useNavigate();
    // add item navigation
    const AddProductNavigate = () => {
        navigate('/addProduct');
    }
    // update navigation
    const updateNavigation = (id) => {
        navigate(`/inventory/${id}`)
    }

    // delete item functionality
    const deleteProduct = id => {
        const deletePhone = window.confirm('aru sure delete this Phone ?')
        if (deletePhone) {
            const url = `http://localhost:5000/myitems/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const displayData = myItems.filter(phone => phone._id !== id);
                        setMyItems(displayData);
                    }
                })


        }
    }

    return (
        <div className='d-flex flex-column flex-sm-row-reverse align-items-sm-center d-100'>
            <div className='w-25 border m-1'>
                <div className=' mt-3 mb-3 '>
                    <button type="button" onClick={AddProductNavigate} className="btn btn-dark sticky-top">Add Item</button>
                </div>
            </div>
            <div className='w-75 border'>
                <h2>My Store Phone</h2>
                {
                    myItems.map(data => <div key={data._id} className='d-flex justify-content-center border align-items-center w-75 mx-auto mb-1'>
                        <div > <img className='img-fluid' style={{ width: '50px', hight: '50px' }} src={data.picture} alt="" /></div>
                        <div className='text-center ms-1'>
                            <p className='mb-0'>name:{data.name}</p>
                            <p className='mb-0'>price:{data.price}</p>
                            <p className='mb-0'>quantity:{data.quantity}</p>


                        </div>
                        <div>
                            <button className='ms-5 mb-1 me-3 btn btn-dark' type="button" onClick={() => updateNavigation(data._id)} >update</button>
                            <button className='ms-5 me-3 mb-1 btn btn-dark' type="button" onClick={() => deleteProduct(data._id)}>Delete</button>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default ManageInventory;