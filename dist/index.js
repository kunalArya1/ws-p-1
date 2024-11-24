"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
//Event handler for connection event
wss.on("connection", function (socket) {
    // console.log("Client connected");
    //   setInterval(() => {
    //     socket.send("Sol Proce " + Math.random());
    //   }, 500);
    socket.on("message", (e) => {
        if (e.toString().includes("ping")) {
            socket.send("pong");
        }
    });
    socket.send("Hello! Welcome to the server");
});
// try frame
