import Link from "next/link";
import { useState } from "react";

export default function BookItem({ book }) {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        let newLikes = likes + 1;
        setLikes(newLikes);
    }

    return (
        <div className="border rounded-lg p-4">
            <img src={book.img_url} className="rounded-lg" />
            <Link href={`/single-book/${book.id}`} className="text-xl font-medium">
                {book.title}
            </Link>
            <p className="text-gray-700">{book.author}</p>
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