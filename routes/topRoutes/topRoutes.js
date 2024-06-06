url = require('url');

const getTop = require('./getTopUsers')

const userRoutes = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;
    const path = parsedUrl.path;

    if (path == "/top" && method == "GET")
    {
        getTop(req, res);
    }
    
}

module.exports = userRoutes;