const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database("users.db")

db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INEGER NOT NULL,
    balance REAL NOT NULL,
    role TEXT NOT NULL
)`);

const data = {
    async updateUser(id, updatedData) {
        const changes = await new Promise((resolve, reject) => {
            db.run(`UPDATE users SET name = ?, age = ? WHERE id = ?`, [updatedData.name, updatedData.age, id], function (err) {
                if (err)
                {
                    reject(err);
                }
                else
                {
                    resolve(this.changes);
                }
            });
        });
        if (changes > 0) return this.getUserById(id);
        return null;
    },
    async getUsers() {
        try 
        {
            const users = await new Promise((resolve,reject) => {
            db.all('SELECT * FROM users', [], (err, rows) => {
                if (err) 
                {
                    reject(err);
                }
                else
                {
                    resolve(rows);
                }
                });
            });
            return users;
        }
        catch (err)
        {
            return null;
        }
    },
    async addUser(user) {
        const lastId = await new Promise((resolve, reject) => {
            db.run(`INSERT INTO USERS (name, age, balance, role) VALUES (?, ?, ?, ?)`, [user.name, user.age, user.balance, user.role], function (err) {
                if (err)
                {
                    reject(err);
                }
                else
                {
                    resolve(this.lastID);
                }
            });
        });
        return this.getUserById(lastId);
    },
    async getUserById(id) {
        const user = await new Promise((resolve, reject) => {
            db.get(`SELECT * FROM users WHERE id = ?`, [id], function (err, row) {
                if (err)
                {
                    reject(err);
                }
                else
                {
                    resolve(row);
                }
            });
        });
        return user;
    },
    async deleteUser(id) {
        const changes = await new Promise((resolve, reject) => {
            db.run(`DELETE FROM users WHERE id = ?`, [id], function (err) {
                if (err)
                {
                    reject(err);
                }
                else
                {
                    resolve(this.changes);
                }
            });
        });
        return changes > 0;
    },
    async getTopUsers() {
        try 
        {
            const users = await new Promise((resolve,reject) => {
            db.all('SELECT id, name, balance FROM users ORDER BY balance DESC', [], (err, rows) => {
                if (err) 
                {
                    reject(err);
                }
                else
                {
                    resolve(rows);
                }
                });
            });
            return users;
        }
        catch (err)
        {
            return null;
        }
    },
    async addBalance(id, updatedData) {
        const changes = await new Promise((resolve, reject) => {
            db.run(`UPDATE users SET balance = balance + ? WHERE id = ?`, [updatedData.balance, id], function (err) {
                if (err)
                {
                    reject(err);
                }
                else
                {
                    resolve(this.changes);
                }
            });
        });
        if (changes > 0) return this.getUserById(id);
        return null;
    },
    async reduceBalance(id, updatedData) {
        const changes = await new Promise((resolve, reject) => {
            db.run(`UPDATE users SET balance = balance - ? WHERE id = ?`, [updatedData.balance, id], function (err) {
                if (err)
                {
                    reject(err);
                }
                else
                {
                    resolve(this.changes);
                }
            });
        });
        if (changes > 0) return this.getUserById(id);
        return null;
    },
    async setBalance(id, updatedData) {
        const changes = await new Promise((resolve, reject) => {
            db.run(`UPDATE users SET balance = ? WHERE id = ?`, [updatedData.balance, id], function (err) {
                if (err)
                {
                    reject(err);
                }
                else
                {
                    resolve(this.changes);
                }
            });
        });
        if (changes > 0) return this.getUserById(id);
        return null;
    }
    
}

module.exports = data;