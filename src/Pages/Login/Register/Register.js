import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className='register-form'>
            <h2 style={{textAlign: 'center'}}>Please Register</h2>
            <form action="">
                <input type="text" name="name" id="" placeholder='Your name'/>
                <br />
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                <br />
                <input type="password" name="password" id="" placeholder='Password' required/>
                <br />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger text-decoration-none'>Please Login</Link></p>
        </div>
    );
};

export default Register;