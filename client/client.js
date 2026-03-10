import http from "http";

const SERVER_HOST = "server";
const SERVER_PORT = 8888;

let REQUEST_COUNTER = 0;

function sendRequest() {
  const options = {
    hostname: SERVER_HOST,
    port: SERVER_PORT,
    path: "/",
    method: "GET",
  };

  const req = http.request(options, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      REQUEST_COUNTER++;
      console.log(
        `[${new Date().toISOString()}] Response: ${data} ${REQUEST_COUNTER}`,
      );
    });
  });

  req.on("error", (err) => {
    console.error(`[${new Date().toISOString()}] Error:`, err.message);
  });

  req.end();
}

console.log("Client started. Sending request every 5 seconds...");

setInterval(sendRequest, 5000);
