url = require('url');

const addBalance = require('./addBalance.js');
const reduceBalance = require('./reduceBalance.js');
const setBalance = require('./setBalance.js');

const balanceRoutes = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;
    const path = parsedUrl.path;

    if (path.startsWith("/balance/add") && method == "PUT")
    {
        addBalance(req, res);
    }
    if (path.startsWith("/balance/reduce") && method == "PUT")
    {
        reduceBalance(req, res);
    }
    if (path.startsWith("/balance/set") && method == "PUT")
    {
        setBalance(req, res);
    }
    
}

module.exports = balanceRoutes;