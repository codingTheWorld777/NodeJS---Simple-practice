const { fetchUsers } = require("./datas")

const requestHandler = (req, res) => {
    const { url, method } = req

    if (url === "/") {
        res.setHeader("Content-type", "text/html")
        res.write(`
            <html>
                <head>
                    <title>Welcome to my first page</title>
                </head>

                <body>
                    <h2>My very first page: Practice</h2>
                    <form action="/create-user" method="POST">
                        <label for="username">Create user</label>
                        <input type="text" id="user" name="user" />
                        <button type="submit">Create</button>
                    </form>
                </body>
            </html>
        `)
        res.write("</html>")
        return res.end()
    } else if (url === "/users") {
        fetchUsers()
        .then(users => {
            res.setHeader("Content-type", "text/html")
            res.write("<html>")
            res.write("<div><ul>")
            users.forEach(user => {
                res.write("<li>" + user.name + "</li>")
            })
            res.write("</ul></div>")
            res.write("</html>")
            res.end()
        })
        .catch(err => console.log(err))
        return
    } else if (url === "/create-user" && method === "POST") {
        const body = []
        req.on("data", (chunk) => {
            body.push(chunk)
        })
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split("=")[1]
            res.setHeader("Content-type", "text/html")
            res.write(`
                <html>
                    <head>
                        <title>Welcome to my first page</title>
                    </head>

                    <body>
                        <h2>Create user page</h2>
                        <div>${message}</div>
                    </body>
                </html>
            `)
            res.end()
        })
        req.statusCode = 302
        return
    }
}

module.exports = {
    requestHandler,
}