export default function LocationItem({ location }) {
    const { id, title, img_url, visited_at } = location;

    return (
        <div key={location.id} className="w-full h-40 bg-red-100 relative">
            <img src={img_url} className="w-full h-full brightness-75" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                <p className="text-white font-bold text-3xl">{title}</p>
            </div>
        </div>
    )
}