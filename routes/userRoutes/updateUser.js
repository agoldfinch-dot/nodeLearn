const data = require('../../data');

const updateUser = (req, res) => {
    let body = '';
    const id = req.url.split("/")[2];
    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', async () => {
        const parsedData = new URLSearchParams(body);
        let updatedData = {}
        parsedData.forEach((value, key) => {
            updatedData[key] = value;
        });
        updatedData['age'] = +updatedData['age']
        const user = await data.updateUser(id,updatedData);
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
    });
};

module.exports = updateUser;