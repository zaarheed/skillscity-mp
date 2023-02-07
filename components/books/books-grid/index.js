import BookItem from "./book-item";
import { useEffect, useState } from "react";

export default function BooksGrid() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        const url = "books";
        const response = await fetch(`/api/books`);
        const data = await response.json();
        setBooks(data);
    }

    return (
        <div className="w-full grid grid-cols-3 gap-4">
            {books.map((book) => (
                <BookItem book={book} />
            ))}
        </div>
    )
}