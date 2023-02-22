import { Client } from "pg";

const pg = new Client({
    connectionString: process.env.POSTGRES_CONNECTION_STRING
});

pg.connect();

export default {
    ...pg,
    execute: async (query, ...args) => {
        const response = await pg.query(query, ...args);
        const rows = response.rows;
        return rows;
    }
}