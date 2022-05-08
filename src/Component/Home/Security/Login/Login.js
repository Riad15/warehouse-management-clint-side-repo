import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SigninGoogle from '../SigninGoogle';
import auth from '../../../../firebase.init';
import { async } from '@firebase/util';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading] = useSignInWithEmailAndPassword(auth)
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    if (loading) {
        return <p style={{ fontSize: '35px', color: 'blue', textAlign: 'center' }}>Loading...</p>;
    }

    const formSubmit = (event) => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (user) {
            window.alert('your email or password is incorrect')
        } else {
            signInWithEmailAndPassword(email, password);
        }


        event.preventDefault();
    }
    if (user) {
        navigate('/home')
    }
    const resetPassWord = async () => {
        const email = emailRef.current.value;
        if (email) {
            console.log(email);
            await sendPasswordResetEmail(email);
            alert('send your reset pass word email')
        } else {
            alert('please enter valid email')
        }
    }

    return (
        <div className='w-50 mx-auto m-3'>
            <h4 className='form-title'>Log In</h4>
            <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <input className='primary w-100 mx-auto d-block' type="submit" value="Log In" />
            </Form>
            <p className='form-p'>
                forget password ? <Link onClick={resetPassWord} to="/">reset Password</Link>

            </p>
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