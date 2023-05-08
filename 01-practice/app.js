const http = require("http")
const routers = require("./routers")

const server = http.createServer(routers.requestHandler)
server.listen(3000, () => console.log("Listening on port 3000"))