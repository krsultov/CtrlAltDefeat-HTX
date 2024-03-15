"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import {set, useForm} from 'react-hook-form';
import {useDispatch, useSelector} from "react-redux";
import {signInFailure, signInStart, signInSuccess} from "@/app/(redux)/user/userSlice";
import {useRouter} from "next/navigation";

function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const [formData, setFormData] = useState({});
    const {loading, error} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const router = useRouter()

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});
    };


    const onSubmit = async (e) => {
        try{
            dispatch(signInStart());

            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if(data.success === false) {
                dispatch(signInFailure(data));
                return;
            }
            dispatch(signInSuccess(data));
            router.push('/');
        }catch (e){
            dispatch(signInFailure(e.message));
        }
    };

    return (
        <div className="flex justify-center items-center h-full w-full md:max-w-md mx-auto">
            <div
                className="flex flex-col bg-gray-200/40 justify-between space-y-10 rounded-lg shadow-lg p-8 text-gray-600 border border-cyan-500/50 w-full md:w-11/12">
                <h1 className="text-3xl font-bold text-center">Log In</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            {...register("email", {
                                required: 'Email is required',
                                pattern: {value: /^\S+@\S+$/i, message: 'Invalid email address'}
                            })}
                            type="email"
                            id="email"
                            placeholder="jonh.doe@email.com"
                            className={`bg-gray-50 border focus:outline-none focus:ring-emerald-500 focus:border-cyan-500 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Password</label>

                        <input
                            {...register("password", {
                                required: 'Password is required'
                            })}
                            type="password"
                            id="password"
                            placeholder="Password..."
                            className={`bg-gray-50 border focus:outline-none focus:ring-emerald-500 focus:border-cyan-500 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                    </div>
                    <button type="submit"
                            disabled={loading}
                            className="w-full bg-primaryDark border focus:outline-none focus:ring-emerald-500 focus:border-cyan-500 text-gray-900 text-sm rounded-lg font-bold block p-2.5"> Login
                    </button>
                </form>


                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <h2 className="text-slate-500">No account?</h2>
                        <Link href="/signup" className="text-cyan-500 font-bold">Sign Up</Link>
                    </div>
                </div>
                <p className="text-red-600">{error ? error.message || 'Something went wrong!' : ""}</p>
            </div>
        </div>
    )
        ;
}

export default Login;