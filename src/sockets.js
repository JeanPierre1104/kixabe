module.exports = (io) => {
  // keep track of all lines that client sends
  const line_history = [];

  io.on("connection", (socket) => {
    for (const line of line_history) {
      socket.emit("draw_line", { line });
    }

    socket.on("draw_line", ({ line }) => {
      line_history.push(line);
      io.emit("draw_line", { line });
    });
  });
};
