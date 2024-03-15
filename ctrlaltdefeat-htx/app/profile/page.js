"use client"
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {signOut} from "@/app/(redux)/user/userSlice";
import {useRouter} from "next/navigation";

export default function ProfilePage() {

    const {currentUser} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const router = useRouter()
    const SignOut = () => {
        dispatch(signOut());
        router.push('/')
    }

    useEffect(() => {
        if (!currentUser) {
            router.push('/login')
        }
    }, []);

    if (currentUser) {
        return (<div className="flex justify-center items-center h-full w-full md:max-w-md mx-auto">
            <div
                className="flex flex-col bg-gray-200/40 justify-between space-y-10 rounded-lg shadow-lg p-8 text-gray-600 border border-cyan-500/50 w-full md:w-11/12">
                <h1 className="text-3xl">Profile</h1>
                <div className="flex justify-between">
                    <img className="max-w-20" src={currentUser.userContent.profilePicture}></img>
                    <div className="flex flex-col justify-between">
                        <p><b>Name:</b> {currentUser.userContent.username}</p>
                        <p><b>Email:</b> {currentUser.userContent.email}</p>
                        <p><b>Roles:</b> {currentUser.userContent.roles}</p>
                    </div>
                </div>


                <div>
                    <button
                        className="bg-secondary focus:outline-none focus:ring-0 focus:ring-offset-1 focus:ring-secondaryDark hover:bg-secondaryDark text-black font-semibold py-3 px-6 rounded-md"
                        onClick={SignOut}>
                        Sign Out
                    </button>
                </div>
            </div>
        </div>)
    } else {
        router.push('/login')
    }

}