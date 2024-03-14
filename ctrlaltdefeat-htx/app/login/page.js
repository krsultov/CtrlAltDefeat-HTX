"use client"
import React, {useState} from 'react';
import Link from 'next/link';

function Login() {
 
    const [formData, setFormData] = useState({});
 
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
    };
 
    return (
        <div className="container flex py-8 px-4 justify-center items-center mx-auto my-auto ">
            <div className="flex justify-center items-center h-full w-full md:max-w-md">
                <div
                    className="flex flex-col bg-gray-200/20 justify-between space-y-10 rounded-lg shadow-lg p-8 text-gray-600 border border-cyan-500/50 w-full md:w-11/12">
                    <h1 className="text-3xl font-bold text-center text-cyan-500 ">Log In</h1>
 
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block mb-1 font-medium">Email</label>
                            <input type="email" id="email"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-cyan-500 block w-full p-2.5"
                                   placeholder="jonh.doe@email.com" onChange={handleChange} required/>
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Password</label>
                            <input type="password" id="password"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-cyan-500 block w-full p-2.5"
                                   placeholder="Password..." onChange={handleChange} required/>
                        </div>
                        <button type="submit"
                                className="w-full text-white bg-cyan-500 hover:bg-cyan-600 font-medium rouded-lg text-sm px-5 py-2.5 text-center"> Log in
                        </button>
                    </form>
 
 
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <h2 className="text-slate-500">No account?</h2>
                            <Link href="/signup" className="text-cyan-500 font-bold">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Login;