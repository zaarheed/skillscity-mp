export default function handler(req, res) {
    const books = [
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            imgUrl: "/assets/1.png"
        },
        {
            title: "The Fellowship of the Ring",
            author: "J.R.R. Tolkien",
            imgUrl: "/assets/2.png"
        },
        {
            title: "Born a Crime",
            author: "Trevor Noah",
            imgUrl: "/assets/3.png"
        }
    ];

    res.json(books);
}