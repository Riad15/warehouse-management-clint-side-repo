import React from 'react';
import useProducts from '../../Hooks/useProducts';

const ManageInventory = () => {
    const [product, setProduct] = useProducts([]);
    return (
        <div className='d-flex flex-column flex-sm-row-reverse align-items-sm-center d-100'>
            <div className='w-25 border m-1'>
                <div className=' mt-3 mb-3 '>
                    <button type="button" className="btn btn-dark sticky-top">Add Item</button>
                </div>
            </div>
            <div className='w-75 border'>
                <h2>store Phone</h2>
                {
                    product.map(data => <div className='d-flex justify-content-center border align-items-center w-75 mx-auto mb-1'>
                        <div> <img className='img-fluid' style={{ width: '50px', hight: '50px' }} src={data.picture} alt="" /></div>
                        <div className='text-center ms-1'>
                            <p className='mb-0'>name:{data.name}</p>
                            <p className='mb-0'>price:{data.price}</p>
                            <p className='mb-0'>quantity:{data.quantity}</p>


                        </div>
                        <div>
                            <button className='ms-5 mb-1 me-3 btn btn-dark' type="button" >update</button>
                            <button className='ms-5 me-3 mb-1 btn btn-dark' type="button" >Delete</button>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default ManageInventory;