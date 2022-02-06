const Websocket = require('ws')

const PORT = process.env.PORT || 3001;

const wss = new Websocket.Server({
  port: PORT
})

console.log(`Web sockets are running on port ${PORT}`)

wss.on("connection", ws => {
  console.log("New client connected")

  ws.on("message", data=>{
    console.log(`Client has sent ${data}`);

    ws.send(`Here is your ${data}`)
  })

  ws.on("close", () => console.log("Client disconnected"))

})
