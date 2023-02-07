export default function BookItem({ book }) {
    return (
        <div className="bg-red-100">
            <p>{book.title}</p>
            <p>{book.author}</p>
        </div>
    )
}