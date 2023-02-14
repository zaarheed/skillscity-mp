import { useLikes } from "@/context/likes";
import NumberOfLikes from "./number-of-likes";

export default function LikeButton() {
    const { handleLike } = useLikes();

    return (
        <button
            onClick={handleLike}
            type="button"
            className="bg-blue-500 px-2 py-1 rounded text-white"
        >
            Like <NumberOfLikes />
        </button>
    )
}