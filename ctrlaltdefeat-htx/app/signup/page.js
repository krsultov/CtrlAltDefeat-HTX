 "use client"
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const [info, setInfo]=useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data); // Handle form submission
  function InfoHandler(event){
    setInfo({...info, [event.target.id]: event.target.value})
  }

  return (
    <div className="flex justify-center items-center h-full w-full md:max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-gray-200/20 justify-between space-y-10 rounded-lg shadow-lg p-8 text-gray-600 border border-cyan-500/50 w-full md:w-11/12">
      <h1 className="text-3xl font-bold text-center text-cyan-500 ">Sign Up</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            {...register("username", { required: 'Username is required' })}
            type="text"
            id="username"
            placeholder="Enter your username"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'border-red-500' : ''}`}
          />
          {errors.username && <p className="text-red-500 text-xs italic">{errors.username.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            {...register("email", { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
            type="email"
            id="email"
            placeholder="Enter your email"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`} onChange={InfoHandler}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            {...register("password", { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters long' } })}
            type="password"
            id="password"
            placeholder="Enter your password"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`} onChange={InfoHandler}
          />
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword", { required: 'Please confirm your password', validate: value => info.confirmPassword === info.password || 'The passwords do not match' })}
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.confirmPassword ? 'border-red-500' : ''}`} onChange={InfoHandler}
          />
          {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>}
        </div>
        <div className="flex items-center justify-between">
            <button type="submit"
                className="w-full text-white bg-cyan-500 hover:bg-cyan-600 font-medium rouded-lg text-sm px-5 py-2.5 text-center"> Sign Up
            </button>
        </div>
        <div className='flex gap-2'>
            <h className="text-slate-500">Have an account?</h>
            <Link href="/login" className="text-cyan-500 font-bold">Log In</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;