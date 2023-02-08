import Hero from "@/components/home/hero";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function SingleBook() {
    const router = useRouter();
    const [book, setBook] = useState(null);
    const { bookId } = router.query;
    
    useEffect(() => {
        if (!bookId) return;

        getBook(bookId);
    }, [bookId]);

    const getBook = async (id) => {
        const response = await fetch(`/api/book-by-id?id=${id}`);
        const data = await response.json();
        const { book } = data;
        setBook(book);
    }

    console.log(book);

    if (!book) {
        return (
            <div>Loading...</div>
        )
    }
    

    return (
        <div className="w-full">
            <Header name={book.title} />

            <Hero
                imgUrl={book.imgUrl}
                title={book.title}
                subtitle={book.author}
            />

            <Content>
                <div className="w-full flex flex-col">

                    <div className="">
                        <CopyToClipboard text={book.linkToPurchase}>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                                type="button"
                            >
                                Copy link to Amazon
                            </button>
                        </CopyToClipboard>
                    </div>

                    <a href={book.linkToPurchase} target="_blank">
                        Buy on Amazon
                    </a>

                </div>
            </Content>

            <Footer
                title="Next book"
                href={`/single-book/${+book.id + 1}`}
            />
        </div>
    )
}