/* Export connection to websocket server */
/* Pure websocket no library */

const socket = new WebSocket("ws://localhost:4167");

socket.onopen = () => {
  console.log("STATUS: Conectado ao servidor");
};

socket.onmessage = (event) => {
  console.log(event.data);
};

socket.onclose = () => {
  console.log("STATUS: Disconnected from server");
};

export default socket;
