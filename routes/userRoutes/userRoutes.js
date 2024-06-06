url = require('url');

const getUsers = require('./getUsers')
const addUser = require('./addUser');
const getUserById = require('./getUserById');
const deleteUser = require('./deleteUser');
const updateUser = require('./updateUser');
const addBalance = require('./addBalance');

const userRoutes = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;
    const path = parsedUrl.path;

    if (path == "/users" && method == "GET")
    {
        getUsers(req, res);
    }
    if (path == "/users" && method == "POST")
    {
        addUser(req, res);
    }
    if (path.startsWith("/users/") && method == "GET")
    {
        getUserById(req, res);
    }
    if (path.startsWith("/users/") && method == "DELETE")
    {
        deleteUser(req, res);
    }
    if (path.startsWith("/users/") && method == "PUT")
    {
        updateUser(req, res);
    }
    if (path.startsWith("/users/") && method == "PUT")
    {
        addBalance(req, res);
    }
}





module.exports = userRoutes;