import sql from "@/utils/postgres";

export default async function handler(req, res) {
    const locations = await sql`
        select * from locations
    `;

    res.json(locations);
}