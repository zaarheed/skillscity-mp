import pg from "@/utils/pg";

export default async function handler(req, res) {
    const { id } = req.query;
    
    if (req.method === "DELETE") {
        await pg.execute(`
            delete from contact_messages where id = ${id}
        `);
        res.json({ message: "success" });
        return;
    }

    if (req.method === "GET") {
        const messages = await pg.execute(`
            select * from contact_messages where id = '${id}'
        `);
        
        res.json(messages[0]);
        return;
    }
    
    res.status(400).json({ message: "This method is not implemented" });
}