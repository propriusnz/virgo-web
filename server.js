const express = require('express');
const cp = require('child_process');
const next =require('next');

const PORT = '3006';
const dev = true


const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('*', (req, res) => {
            return handle(req, res);
        });



        server.listen(PORT, err => {
            if (err) throw err;
            const serverUrl = `http://localhost:${PORT}`;
            console.log(`> Ready on ${serverUrl}`);
        });
    });
