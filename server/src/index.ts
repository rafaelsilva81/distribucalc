import server from './server';
import webSocketServer from './webSocket';
require('dotenv').config();

const port = process.env.PORT || 3000;

const app = server.listen(port, () => {
    console.log('Server rodando na porta', port);
})

webSocketServer(app);

