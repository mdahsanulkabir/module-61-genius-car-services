import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification:true});
    const [displayName, setDisplayName] = useState('');
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if(loading || updating){
        return <Loading></Loading>;
    }
    
    if(user){
        console.log(user);
    }

    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email,password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }

    return (
        <div className='register-form'>
            <h2 style={{textAlign: 'center'}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your name'/>
                <br />
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                <br />
                <input type="password" name="password" id="" placeholder='Password' required/>
                <br />
                <input type="checkbox" name="terms" id="terms" onChange={()=>setAgree(!agree)}/>
                {/* <label className={agree ? 'text-primary ps-2' : 'text-danger ps-2'} htmlFor="terms">Accept Genius Car Services Terms and Conditions</label> */}
                <label className={`ps-2 ${agree? 'text-primary':'text-danger'}`} htmlFor="terms">Accept Genius Car Services Terms and Conditions</label>
                <input 
                    disabled = {!agree}
                    className='bg-primary text-white d-block w-50 mt-2 mx-auto border-0' 
                    type="submit" 
                    value="Register" 
                />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary text-decoration-none'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;