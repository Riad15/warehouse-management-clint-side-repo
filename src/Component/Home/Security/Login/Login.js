import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SigninGoogle from '../SigninGoogle';

const Login = () => {
    return (
        <div className='w-50 mx-auto m-3'>
            <h4 className='form-title'>Log In</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <input className='primary w-100 mx-auto d-block' type="submit" value="Log In" />
            </Form>
            <p className='form-p'>
                New to user ? <Link className='form-link' to="/signup">Register</Link>

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

export default Login;