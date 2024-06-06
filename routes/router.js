url = require('url')


const userRoutes = require('./userRoutes/userRoutes')
const topRoutes = require('./topRoutes/topRoutes');
const balanceRoutes = require('./balanceRoutes/balanceRoutes');

const routeHandler = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.path;

    if (path == "/users" || path.startsWith("/users/"))
    {
        userRoutes(req, res);
    }
    else if (path == "/top" || path.startsWith("/top/"))
    {
        topRoutes(req, res);
    }
    else if (path == "/balance" || path.startsWith("/balance/"))
    {
        balanceRoutes(req, res);
    }
    else
    {
        res.setHeader('Content-Type','application/json');
        res.writeHead(404);
        res.end(JSON.stringify({message:"Not Found" }));
    }
}

module.exports = routeHandler

