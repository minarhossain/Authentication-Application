import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-slate-300 p-5">
            <div className='max-w-[1140px] mx-auto flex justify-between items-center'>
                <h1>Auth App</h1>
                <ul className='flex items-center gap-5'>

                    <Link to=''>
                        <li>Home</li>
                    </Link>
                    <Link to='profile'>
                        <li>Profile</li>
                    </Link>
                    <Link to='sign-in'>
                        <li>Sign In</li>
                    </Link>
                    <Link to='sign-up'>
                        <li>Sign Up</li>
                    </Link>



                </ul>
            </div>


        </div>
    );
};

export default Header;