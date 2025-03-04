const pool = require("../config/db");



const createCustomer = async (fullName, email, phone, password_hash, agree_terms) => {
    const query = 
         `INSERT INTO customer (full_name, email, phone, password_hash, agree_terms) VALUES (?, ?, ?, ?, ?)`;
         return pool.query(query, [fullName, email, phone, password_hash, agree_terms]);
}


module.exports = {  createCustomer };
