"use client";
import Link from "next/link";
import { useState } from "react";


export default function LoginPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const onLogin = async () => {
        console.log(user);

    };
    return (
        <div className="flex bg-black text-white flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-[3.5rem] my-3 font-semibold tracking-wide">Login</h1><hr />
            <label htmlFor="email">Email</label>
            <input required type="email" id="email" value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder='Enter your email'
                className="p-2 border border-gray-300 rounded-3xl mb-4 focus:outline-none focus:border-gray-600 text-black"
            />
            <label htmlFor="password">Password</label>
            <input required type="password" id="password" value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder='Enter your password'
                className="p-2 border border-gray-300 rounded-3xl mb-4 focus:outline-none focus:border-gray-600 text-black"
            />
            <button className="p-2 border border-gray-300 rounded-lg mb-4 " onClick={onLogin}>Login</button>
            <Link href="/signup">Don't have an Account?  <Link href="/signup" className="underline">Signup now</Link></Link>
        </div>
    )
}