
export default function UserProfile({ params }: any) {
    return (
        <div className="flex bg-black text-white flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile Page</h1>
            <p className="text-4xl">ID of profile page/ <span className="p-1 text-black bg-orange-500"> {params.id} </span></p>
        </div>
    )
} 