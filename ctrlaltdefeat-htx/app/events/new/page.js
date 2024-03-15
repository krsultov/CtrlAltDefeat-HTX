"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import { useForm } from "react-hook-form";

function Form() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [formData, setFormData] = useState({});
  const {register, handleSubmit, formState: {errors}} = useForm();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSub = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center w-full md:max-w-md mx-auto py-20">
      <div className="flex flex-col bg-gray-200/40 justify-between space-y-10 rounded-lg shadow-lg p-8 text-gray-600 border border-cyan-500/50 w-full md:w-11/12">
        <h1 className="text-3xl font-bold text-center">Create Event</h1>

        <form onSubmit={handleSubmit(onSub)} className="space-y-7">
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              {...register("title", {required: 'Title is required'})}
              type="text"
              id="title"
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-cyan-500 block w-full p-2.5 ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter title..."
              onChange={handleChange}
            />
            {errors.title && <p className="text-red-500 text-xs italic">{errors.title.message}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              {...register("description", {required: 'Description is required'})}
              id="description"
              rows="4"
              className={`resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-cyan-500 block w-full p-2.5 ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Add Description..."
              onChange={handleChange}
              
            />
            {errors.description && <p className="text-red-500 text-xs italic">{errors.description.message}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Location</label>
            <input
              {...register("location", {required: 'Locaton is required'})}
              type="text"
              id="location"
              className={`p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-cyan-500 block w-full p-2.5 ${errors.location ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter Location..."
              onChange={handleChange}
              
            />
            {errors.location && <p className="text-red-500 text-xs italic">{errors.location.message}</p>}
          </div>
          <div className="flex flex-col w-full">
            <label className="block mb-1 font-medium">
              Date
            </label>
            <DatePicker
              {...register("date", {required:"Date is required"})}
              id="date"
              selected={selectedDate}
              onChange={handleDateChange}
              wrapperClassName="w-full"
              className={`flex w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
              dateFormat="MM/dd/yyyy"
              placeholderText="Select a date"
              
            />
            {errors.location && <p className="text-red-500 text-xs italic">{errors.location.message}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Required participants
            </label>
            <input
              type="number"
              min="0"
              id="reqParticipants"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-cyan-500 block w-full p-2.5"
              placeholder="Number"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Max participants
            </label>
            <input
              type="number"
              min="0"
              id="maxParticipants"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-cyan-500 block w-full p-2.5"
              placeholder="Number"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primaryDark border focus:outline-none focus:ring-emerald-500 focus:border-cyan-500 text-gray-900 text-sm rounded-lg font-bold block p-2.5"
          >
            {" "}
            Create event
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
