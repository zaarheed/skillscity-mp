import sql from "@/utils/postgres";

export default async function handler(req, res) {
    const search = req.query.search;

    let locations = [];

    if (search === null || search === undefined) {
        locations = await sql`
            select * from locations
        `;
    }
    else {
        locations = await sql`
            select * from locations
            where title = ${search}
        `;
    }

    res.json(locations);
}