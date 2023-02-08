import topics from "./topics";

export default function Topics() {
    return (
        <div className="w-full flex flex-col mt-5 mb-10">
            <h3 className="font-medium text-2xl">
                Topics covered in this course
            </h3>
            <div>
                <ul className="list-disc">
                    {topics.map((topic, index) => {
                        return <li key={index}>{topic}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}