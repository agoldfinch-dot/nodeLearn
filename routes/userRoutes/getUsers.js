const data = require('../../data');


const getUsers = async (req, res) => {
    res.setHeader('Content-Type','application/json');
    res.writeHead(200);
    response = await data.getUsers()
    res.end(JSON.stringify({'data': response}));
}
module.exports = getUsers;