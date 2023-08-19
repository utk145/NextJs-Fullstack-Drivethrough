"use client"
import axios from "axios"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";



export default function Profile() {
    const router = useRouter();
    const [userData, setuserData] = useState([]);
    const onLogout = async () => {
        try {
            await axios.get("/api/users/logout");
            router.push("/login")
        } catch (error: any) {
            console.log(error.message);
        }
    }

    const getUserDetails = async () => {
        const resp = await axios.get("/api/users/me");
        console.log(resp.data);
        setuserData(resp.data.data)
    }

    
    useEffect(() => {
        getUserDetails();    
    }, [])
    

    return (
        <div className="flex bg-black text-white flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-[30px]">Profile Page</h1>
            <button className="p-2 absolute top-5 right-10 border border-gray-300 rounded-lg mb-4 hover:bg-red-900 transition-all"
                onClick={onLogout}
            >Logout</button>
            <h2 className="p-1 mt-4 rounded bg-pink-700">{userData._id === 'nothing' ? "" :<span>User-id is <Link href={`/profile/${userData._id}`} className="underline"> {userData._id}
            </Link></span> }</h2>
            <h2 className="p-1 mt-4 rounded bg-pink-700">{userData._id === 'nothing' ? "" :<span>Username is <Link href={`/profile/${userData._id}`} className="underline"> {userData.username}
            </Link></span> }</h2>
            <h2 className="p-1 mt-4 rounded bg-pink-700">{userData._id === 'nothing' ? "" :<span>Email is <Link href={`/profile/${userData._id}`} className="underline"> {userData.email}
            </Link></span> }</h2>
            {/* <button
                onClick={getUserDetails}
                className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >Get User Details</button> */}
        </div>
    )
} 