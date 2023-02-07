import BooksGrid from "@/components/books/books-grid";
import Link from "next/link";

export default function BooksPage() {
    return (
        <div className="bg-green-100">
            Books page

            <BooksGrid />

            <div>
                <Link href="/">
                    Go to home page
                </Link>
            </div>
        </div>
    )
}