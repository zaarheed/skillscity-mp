import { useState } from "react";

export default function LocationItem({ location }) {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        let newLikes = likes + 1;
        setLikes(newLikes);
    }

    return (
        <div className="border rounded-lg p-4">
            <img src={location.imgUrl} className="rounded-lg" />
            <p className="text-xl font-medium">{location.title}</p>
            <p className="text-gray-700">{location.author}</p>
            <button
                onClick={handleLike}
                type="button"
                className="bg-blue-500 px-2 py-1 rounded text-white"
            >
                Like ({likes} likes)
            </button>
        </div>
    )
}