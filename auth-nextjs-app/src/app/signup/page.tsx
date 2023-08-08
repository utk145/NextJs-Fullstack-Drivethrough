"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";



export default function SingupPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });

    const onSignup = async () => {

    };

    return (
        <div className="flex bg-black text-white flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-[3.5rem] my-3 font-semibold tracking-wide">Signup</h1><hr />
            <label htmlFor="username">Username</label>
            <input required type="text" id="username" value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder='Enter username'
                className="p-2 border border-gray-300 rounded-3xl mb-4 focus:outline-none focus:border-gray-600 text-black"
            />
            <label htmlFor="email">Email</label>
            <input required type="email" id="email" value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder='Enter email'
                className="p-2 border border-gray-300 rounded-3xl mb-4 focus:outline-none focus:border-gray-600 text-black"
            />
            <label htmlFor="password">Password</label>
            <input required type="password" id="password" value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder='Enter password'
                className="p-2 border border-gray-300 rounded-3xl mb-4 focus:outline-none focus:border-gray-600 text-black"
            />
            <button className="p-2 border border-gray-300 rounded-lg mb-4 " onClick={onSignup}>Join Now</button>
            <Link href="/login">Already have an Account?  <Link href="/login" className="underline"> Login</Link></Link>
        </div>


    )
}