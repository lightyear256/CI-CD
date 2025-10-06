import { WebSocketServer } from "ws";
import { client } from '@repo/db/client';
const server=new WebSocketServer({
    port:3001
});

server.on("connection",async(socket)=>{
    await client.user.create({
        data:{
            username:Math.random().toString(),
            name:Math.random().toString(),
            password:Math.random().toString()
        }
    })
    socket.send("you are connected to the websocket server")
})