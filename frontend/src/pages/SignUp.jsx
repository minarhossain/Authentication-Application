import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        alert(data.message);
    }
    // console.log(formData)
    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
                <input
                    type="text"
                    placeholder="User Name"
                    id="username"
                    onChange={handleChange}
                    className="bg-slate-100 p-3 rounded-lg" />

                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    onChange={handleChange}
                    className="bg-slate-100 p-3 rounded-lg" />

                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={handleChange}
                    className="bg-slate-100 p-3 rounded-lg" />

                <button className='bg-slate-600 text-white rounded-lg p-3 uppercase text-xl hover:opacity-95 disabled:opacity-80'>Sign Up</button>
            </form>

            <div className='flex gap-2 mt-5'>
                <p>Have an account?</p>
                <Link to='/sign-in'>
                    <span className='text-blue-600'>Sign In</span>
                </Link>
            </div>
        </div>
    );
};

export default SignUp;