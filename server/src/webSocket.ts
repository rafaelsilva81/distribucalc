import { IncomingMessage, Server as HTTPServer } from 'http';
import WebSocket from 'ws';


interface Calculation {
    firstExpression: string;
    secondExpression: string;
    operator: string;
}

  
function onError(ws: WebSocket, err: Error) {
    console.error(`erro: ${err.message}`);
}
 
async function onMessage(ws: WebSocket, data: WebSocket.Data) {
    console.log(`recebido: ${data}`);
    /* decode data */
    const message = JSON.parse(data.toString());
    /* Calculate */
    const res = await calculate(message);
    /* Send result */
    console.log(res)
    ws.send(res.toString());
}
 
async function calculate(message: Calculation) {
    const { firstExpression, secondExpression, operator } = message;
    let res: number;
    res = 0;

    if (operator === '/' && secondExpression === '0') {
        return 'ERR'
    } else {
        let t1 = Number(firstExpression);
        let t2 = Number(secondExpression);
        switch (operator) {
            case '+':
                res = t1 + t2;
                break;
            case '-':
                res = t1 - t2;
                break;
            case 'X':
                res = t1 * t2;
                break;
            case '/':
                res = t1 / t2;
                break;
            case '^':
                res = t1 ** t2;
            default:
                break;
        }
    }
    
    if (res == Infinity) {
        return 'ERR'
    } else {
        return res;
    }
   
}

function onConnection(ws: WebSocket, req: IncomingMessage) {
    ws.on('message', data => onMessage(ws, data));
    ws.on('error', error => onError(ws, error));
    /* Get remote address of connection */
    const ip = req.headers.origin;
    console.log(`SERVER: Conexão vinda de: ${ip}`);
    /* Get data */
}
 
const webSocketServer = (server: HTTPServer) => {
    const wss = new WebSocket.Server({
        server: server
    });
 
    wss.on('connection', onConnection);
 
    console.log(`Websocket iniciado!`);
    return wss;
}

export default webSocketServer;
