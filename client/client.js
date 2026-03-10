import http from "http";

const SERVER_HOST = "server";
const SERVER_PORT = 8888;

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
    console.log("Response from server:");
    console.log(data);
  });
});

req.on("error", (err) => {
  console.error("Request error:", err);
});

req.end();
