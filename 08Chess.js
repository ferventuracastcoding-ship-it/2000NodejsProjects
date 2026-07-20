const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { Chess } = require("chess.js");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

const chess = new Chess();

let players = [];

io.on("connection", (socket) => {
    console.log("Player connected:", socket.id);

    if (players.length < 2) {
        players.push(socket.id);

        socket.emit("color",
            players.length === 1 ? "white" : "black"
        );
    } else {
        socket.emit("full");
    }

    socket.emit("board", chess.fen());

    socket.on("move", (move) => {
        try {
            chess.move(move);

            io.emit("board", chess.fen());

            if (chess.isGameOver()) {
                io.emit("gameover");
            }

        } catch {
            socket.emit("invalid");
        }
    });

    socket.on("disconnect", () => {
        players = players.filter(id => id !== socket.id);
        console.log("Disconnected");
    });

});

server.listen(3000, () => {
    console.log("Chess server running");
});
