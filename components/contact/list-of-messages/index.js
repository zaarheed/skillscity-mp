export default function ListOfMessages({ isLoading, messages, onDelete }) {

    const handleDelete = async (id) => {
        await fetch(`/api/contact-messages/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        onDelete()
    }

    if (isLoading) {
        return (
            <div className="w-full grid grid-cols-3 gap-4 mt-10">
                <div className="bg-gray-200 py-3 px-6 rounded h-28 animate-pulse" />
                <div className="bg-gray-200 py-3 px-6 rounded h-28 animate-pulse" />
                <div className="bg-gray-200 py-3 px-6 rounded h-28 animate-pulse" />
            </div>
        )
    }

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {messages.map((message, index) => (
                <div key={index} className="bg-gray-200 py-3 px-6 rounded">
                    <p className="font-medium text-xl">{message.name}</p>
                    <p>
                        {message.email ? message.email : (
                            <span className="italic text-gray-500">No email provided</span>
                        )}
                    </p>
                    <p>{message.message}</p>

                    <button
                        type="button"
                        className={`
                            bg-red-500 text-white font-medium px-3 py-1 rounded
                            flex flex-row
                        `}
                        onClick={() => handleDelete(message.id)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}