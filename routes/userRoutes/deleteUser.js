const data = require('../../data');

const deleteUser = async (req, res) => {
    const id = req.url.split("/")[2];
    const isDeleted = await data.deleteUser(id);

    if (isDeleted)
    {
        res.setHeader('Content-Type','application/json');
        res.writeHead(200);
        res.end(JSON.stringify({'data': `user with id = ${id} was deleted`}));
    }
    else
    {
        res.setHeader('Content-Type','application/json');
        res.writeHead(404);
        res.end(JSON.stringify({'message':'No such user'}));
    }
}

module.exports = deleteUser;