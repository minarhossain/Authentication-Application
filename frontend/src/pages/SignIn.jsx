
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice';

const SignIn = () => {

    const [formData, setFormData] = useState({});
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);

    const { loading, error } = useSelector(state => state.user);
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //setLoading(true);
            dispatch(signInStart());

            //setError(false);
            const response = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)

            });
            const data = await response.json();
            // setLoading(false);
            if (data.success === false) {
                // setError(true);
                dispatch(signInFailure(data));
                return;
            }
            dispatch(signInSuccess(data))
            navigate('/')

        } catch (error) {
            // setLoading(false);
            dispatch(signInFailure(error));
            // setError(true);
        }
    }
    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>

                <input
                    type="text"
                    placeholder="Email"
                    id="email"
                    className="bg-slate-100 p-3 rounded-lg"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Password"
                    id="password"
                    className="bg-slate-100 p-3 rounded-lg"
                    onChange={handleChange}
                />

                <button disabled={loading} className='bg-slate-600 text-white rounded-lg p-3 uppercase text-xl hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...' : 'Sign In'}</button>
            </form>

            <div className='flex gap-2 mt-5'>
                <p> Dont have an account?</p>
                <Link to='/sign-up'>
                    <span className='text-blue-600'>Sign Up</span>
                </Link>

            </div>
            <p className='text-red-600 font-bold mt-5'>
                {error ? error.message || 'Something Went Wrong' : ""}
            </p>
        </div>
    );
};

export default SignIn;