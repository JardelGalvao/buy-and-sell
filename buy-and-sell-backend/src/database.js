import mysql from 'mysql';

let connection;

export const db = {
    connect: () => {
        connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            socketPath: "/cloudsql/buy-and-sell-7f9b2:us-central1:buy-and-sell-db",
        });
        connection.connect();
    },
    query: (queryString, escapedValues) => {
        return new Promise((resolve, reject) => {
            connection.query(queryString, escapedValues, (error, results, fields) => {
                if(error) reject(error);
                resolve({results, fields});
            })
        })
    },
    end: () => connection.end(),
}