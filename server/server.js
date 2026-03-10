import { createServer } from "http";

const PORT = 8888;

const server = createServer((_, res) => {
  res.end("Hello from Docker container");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
