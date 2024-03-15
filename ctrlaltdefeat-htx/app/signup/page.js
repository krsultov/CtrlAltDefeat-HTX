"use client"
import Link from 'next/link';
import React from 'react';
import {useState} from 'react';
import {set, useForm} from 'react-hook-form';
import {useRouter} from "next/navigation";

const SignUp = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const [formData, setFormData] = useState({});

    const {register, handleSubmit, formState: {errors}} = useForm();


    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});
    };

    const onSubmit = async () => {
        try {
            setLoading(true);
            setError(false);
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            setLoading(false);

            if (data.success === false) {
                setError(true);
                return;
            }
            router.push('/login')
        } catch (e) {
            setLoading(false);
            setError(true);
        }
    }

    return (
        <div className="flex justify-center items-center h-full w-full md:max-w-md mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col bg-gray-200/40 justify-between space-y-5 rounded-lg shadow-lg p-8 text-gray-600 border border-cyan-500/50 w-full md:w-11/12">
                <h1 className="text-3xl font-bold text-center ">Sign Up</h1>
                <div className="mb-4">
                    <label className="block mb-1 font-medium" htmlFor="username">
                        Username
                    </label>
                    <input
                        {...register("username", {required: 'Username is required'})}
                        type="text"
                        id="username"
                        placeholder="johndoe123"
                        onChange={handleChange}
                        className={`bg-gray-50 border focus:outline-none focus:ring-emerald-500 focus:border-cyan-500 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.username && <p className="text-red-500 text-xs italic">{errors.username.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium" htmlFor="email">
                        Email
                    </label>
                    <input
                        {...register("email", {
                            required: 'Email is required',
                            pattern: {value: /^\S+@\S+$/i, message: 'Invalid email address'}
                        })}
                        onChange={handleChange}
                        type="email"
                        id="email"
                        placeholder="jonh.doe@email.com"
                        className={`bg-gray-50 border focus:outline-none focus:ring-emerald-500 focus:border-cyan-500 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium" htmlFor="password">
                        Password
                    </label>
                    <input
                        {...register("password", {
                            required: 'Password is required',
                            minLength: {value: 6, message: 'Password must be at least 6 characters long'}
                        })}
                        type="password"
                        id="password"
                        placeholder="Password..."
                        onChange={handleChange}
                        className={`bg-gray-50 border focus:outline-none focus:ring-emerald-500 focus:border-cyan-500 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}

                    />
                    {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                </div>
                <div className="mb-6">
                    <label className="block mb-1 font-medium" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        {...register("confirmPassword", {
                            required: 'Please confirm your password',
                            validate: value => value === formData.password || 'The passwords do not match'
                        })}
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        className={`bg-gray-50 border focus:outline-none focus:ring-emerald-500 focus:border-cyan-500 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}

                    />
                    {errors.confirmPassword &&
                        <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>}
                </div>
                <div className="flex items-center justify-between ">
                    <button type="submit"
                            disabled={loading}
                            className="mt-5 w-full focus:outline-none focus:ring-emerald-500 focus:border-cyan-500 bg-primaryDark border text-gray-900 text-sm rounded-lg font-bold block p-2.5"> Sign
                        Up
                    </button>
                </div>
                <div className='flex gap-2'>
                    <h2 className="text-slate-500">Have an account?</h2>
                    <Link href="/login" className="text-cyan-500 font-bold">Log In</Link>
                </div>

                <p className="text-red-600">{error ? error.message || 'Something went wrong!' : ""}</p>
            </form>
        </div>
    );
};

export default SignUp;