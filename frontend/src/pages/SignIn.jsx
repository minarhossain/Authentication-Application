import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
            <form className='flex flex-col gap-4 '>

                <input type="text" placeholder="Email" id="email" className="bg-slate-100 p-3 rounded-lg" />

                <input type="text" placeholder="Password" id="password" className="bg-slate-100 p-3 rounded-lg" />

                <button className='bg-slate-600 text-white rounded-lg p-3 uppercase text-xl hover:opacity-95 disabled:opacity-80'>Sign In</button>
            </form>

            <div className='flex gap-2 mt-5'>
                <p> Don't have an account?</p>
                <Link to='/sign-up'>
                    <span className='text-blue-600'>Sign Up</span>
                </Link>

            </div>
        </div>
    );
};

export default SignIn;