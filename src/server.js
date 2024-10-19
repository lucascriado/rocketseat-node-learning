import http from 'node:http';

const users = []

const server = http.createServer((req, res) => {
    const { url, method } = req;

    console.log(method, url);

    if (method === 'GET' && url === '/users') {
        return res
        .setHeader('Content-Type', 'application/json')
        .end(JSON.stringify(users));
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'Lucas',
            email: 'lucascriado@gmail.com'
        })

        return res.end('Criação de usuário');
    }

    return res.end('Hello World');
});

server.listen(3000) 