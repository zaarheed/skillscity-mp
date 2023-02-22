import pg from "@/utils/pg";

export default async function handler(req, res) {
    const { id } = req.query;
    console.log(id);

    await pg.execute(`
        delete from contact_messages where id = ${id}
    `);

    res.json({ message: "success" })
}