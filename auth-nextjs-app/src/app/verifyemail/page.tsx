"use client"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function VerifyEmailPage() {
    const [token, settoken] = useState("");
    const [verified, setverified] = useState(false);
    const [error, seterror] = useState(false);

    const verifyUSerEmail = async () => {
        try {
            await axios.post('/api/users/verifyemail', { token })
            setverified(true);
        } catch (error: any) {
            seterror(true);
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        settoken(urlToken || "")
    }, [])


    useEffect(() => {
        if (token.length > 0) {
            verifyUSerEmail();
        }
    }, [token])

    return (
        <div className="flex bg-black text-white flex-col items-center justify-center min-h-screen py-2">

            <h1 className="text-4xl">Verify Email</h1>
            <h2 className="p-2 bg-orange-500 text-black">{token ? `${token}` : "no token"}</h2>

            {verified && (
                <div>
                    <h2 className="text-2xl">Email Verified</h2>
                    <Link href="/login" className="p-2 border border-gray-300 rounded-lg mb-4">
                        Login
                    </Link>
                </div>
            )}
            {error && (
                <div>
                    <h2 className="text-2xl bg-red-500 text-black">Error</h2>
                </div>
            )}
        </div>
    )

}
