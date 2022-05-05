import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SigninGoogle from '../SigninGoogle';

const Register = () => {
    return (
        <div className='w-50 mx-auto m-3'>
            <h4 className='form-title'>Register</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Control type="name" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">

                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">

                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupConfirmPassword">

                    <Form.Control type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <input className='primary w-100 mx-auto d-block' type="submit" value="Register" />
            </Form>
            <p className='form-p'>
                Have a account ? <Link className='form-link' to="/login">Login</Link>

            </p>
            <br />
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className="bg-dark w-50"></div>
                <p className='mt-3 p-2'>or</p>
                <div style={{ height: '1px' }} className="bg-dark w-50"></div>
            </div>
            <SigninGoogle></SigninGoogle>
        </div>
    );
};

export default Register;