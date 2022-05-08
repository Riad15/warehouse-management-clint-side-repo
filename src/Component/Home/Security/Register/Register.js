import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import SigninGoogle from '../SigninGoogle';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const ConfirmRef = useRef('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [sendEmailVerification, sending, error1] = useSendEmailVerification(
        auth
    );

    const formSubmit = async (event) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = ConfirmRef.current.value;

        if (error) {
            return (
                <div>
                    <p className='text-center'>Error: {error1.message}</p>
                </div>
            );
        }

        if (sending) {
            return <p className='text-center'>Sending...</p>;
        }

        if (password.length > 5) {
            if (password === confirmPassword) {
                createUserWithEmailAndPassword(email, password);
                await sendEmailVerification();
                alert('Sent email');
                alert('succesfully create account')
            } else {
                window.alert('incorrect your password')
            }
        } else {
            window.alert('password must be more then 6 digit')
        }
        event.preventDefault();
    }
    if (user) {
        navigate('/home')
        console.log(user);
    }
    return (
        <div className='w-50 mx-auto m-3'>
            <h4 className='form-title'>Register</h4>
            <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Control ref={nameRef} type="name" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupConfirmPassword">

                    <Form.Control ref={ConfirmRef} type="confirmPassword" placeholder="Confirm Password" required />
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