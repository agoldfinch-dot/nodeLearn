const data = require('../../data');

module.exports = (req, res) => {
    let body = '';
    
    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', async () => {
        const parsedData = new URLSearchParams(body);
        const name = parsedData.get('name');
        const age = parsedData.get('age');
        const balance = Math.random()*1000;
        const role = 'user';

        if (name && age) 
        {
            const user = {name, age: +age, balance, role};
            const addedUser = await data.addUser(user);
            res.setHeader('Content-Type','application/json');
            res.writeHead(201);
            res.end(JSON.stringify(addedUser));
        }
        else
        {
            res.setHeader('Content-Type','application/json');
            res.writeHead(400);
            res.end(JSON.stringify({message:"dsdas"}))
        }
        
    })
};;