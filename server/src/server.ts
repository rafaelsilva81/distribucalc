/* Export Simple HTTP Server (dont use express) */

import { createServer } from 'http';

const server = createServer((req, res) => {
    /* This server is gonna be receiving bytes */
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World'); 
});

export default server;
