import LikeButton from "./like-button";

export default function LocationItem({ location }) {
    return (
        <div className="border rounded-lg p-4">
            <img src={location.img_url} className="rounded-lg" />
            <p className="text-xl font-medium">{location.title}</p>
            <p className="text-gray-700">{location.author}</p>
            <LikeButton />
        </div>
    )
}