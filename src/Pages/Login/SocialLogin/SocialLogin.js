import React from 'react';
import google from '../../../images/Social/google.png';
import facebook from '../../../images/Social/facebook.png';
import github from '../../../images/Social/github.png';
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    //if we use return in error, then it will not got to below return
    //therefore we use a tag here and put the tag in main return
    //as like below
    let errorElement;
    if (error || error1) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
            </div>
    }

    if(user){
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height : '1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-3' >or</p>
                <div style={{height : '1px'}} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <button 
                onClick={()=>signInWithGoogle()}
                className='btn btn-info w-50 d-block mx-auto my-2'>
                <img style={{width : '30px'}} src={google} alt="" />
                <span className='px-3'>Google Sign In</span>
            </button>
            <button 
                
                className='btn btn-info w-50 d-block mx-auto my-2'>
                <img style={{width : '30px'}} src={facebook} alt="" />
                <span className='px-3'>Facebook Sign In</span>
            </button>
            <button 
                onClick={()=>signInWithGithub()}
                className='btn btn-info w-50 d-block mx-auto my-2'>
                <img style={{width : '30px'}} src={github} alt="" />
                <span className='px-3'>Github Sign In</span>
            </button>
        </div>
    );
};

export default SocialLogin;