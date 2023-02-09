import sql from "@/utils/postgres";

export default async function handler(req, res) {
    const books = await sql`
        select * from books
    `;

    res.json(books);
}