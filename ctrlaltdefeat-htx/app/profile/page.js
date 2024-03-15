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
        return (<div>
            <h1>Profile</h1>
            <p>Name: {currentUser.userContent.username}</p>
            <p>Email: {currentUser.userContent.email}</p>
            <p>Roles: {currentUser.userContent.roles}</p>
            <img className="max-w-20" src={currentUser.userContent.profilePicture}></img>
            <div>
                <button
                    className="bg-secondary focus:outline-none focus:ring-0 focus:ring-offset-1 focus:ring-secondaryDark hover:bg-secondaryDark text-black font-semibold py-3 px-6 rounded-md"
                    onClick={SignOut}>
                    SignOut
                </button>
            </div>
        </div>)
    } else {
        router.push('/login')
    }

}