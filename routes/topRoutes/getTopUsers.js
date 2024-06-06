const data = require('../../data');


const getTopUsers = async (req, res) => {
    res.setHeader('Content-Type','application/json');
    res.writeHead(200);
    response = await data.getTopUsers()
    res.end(JSON.stringify({'data': response}));
}
module.exports = getTopUsers;