import BooksGrid from "@/components/books/books-grid";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import Link from "next/link";

export default function BooksPage() {
    return (
        <div className="w-full">
            <Header name="Books" />

            <div className="w-full max-w-6xl mx-auto mt-8">
                <BooksGrid />
            </div>

            <Footer title="Home Page" href="/" />
        </div>
    );
}