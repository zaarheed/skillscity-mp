export default function Hero({ imgUrl, title, subtitle }) {
    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="w-full flex flex-col items-center py-4 space-y-4 md:flex-row md:space-x-4">
                <div className="w-48">
                    <img src={imgUrl} className="rounded-lg" />
                </div>
                <div className="w-full text-center md:text-left">
                    <h1
                        className="text-6xl font-bold text-gray-700 sm:text-green-600 md:text-blue-600 lg:text-red-600"
                    >
                        {title}
                    </h1>
                    <p className="text-xl text-gray-700">{subtitle}</p>
                </div>
            </div>
        </div>
    )
}