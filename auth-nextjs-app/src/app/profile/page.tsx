"use client"
import axios from "axios"
import { useRouter } from "next/navigation";



export default function Profile() {
    const router = useRouter();
    const onLogout = async () => {
        try {
            await axios.get("/api/users/logout");
            router.push("/login")
        } catch (error:any) {
            console.log(error.message);
        }
    }

    return (
        <div className="flex bg-black text-white flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile Page</h1> <hr />
            <button className="p-2 absolute top-5 right-10 border border-gray-300 rounded-lg mb-4 hover:bg-red-500 transition-all"
                onClick={onLogout}
            >Logout</button>
        </div>
    )
} 