import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hapi-server',
    password: 'Abc@123',
    database: 'buy-and-sell',
});

export const db = {
    connect: () => connection.connect(),
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