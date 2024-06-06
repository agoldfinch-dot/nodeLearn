const data = require('../../data');

const getUsers = async (req, res) => {
    const id = req.url.split("/")[2];
    const user = await data.getUserById(id);

    if (user == null)
    {
        res.setHeader('Content-Type','application/json');
        res.writeHead(400);
        res.end(JSON.stringify({'message':'No such user'}));
    }
    else
    {
        res.setHeader('Content-Type','application/json');
        res.writeHead(200);
        res.end(JSON.stringify({'data': user}));
    }
}

module.exports = getUsers;