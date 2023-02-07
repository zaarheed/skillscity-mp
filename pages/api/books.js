export default function handler(req, res) {
    const books = [
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
        },
        {
            title: "The Fellowship of the Ring",
            author: "J.R.R. Tolkien"
        },
        {
            title: "Born a Crime",
            author: "Trevor Noah"
        }
    ];

    res.json(books);
}