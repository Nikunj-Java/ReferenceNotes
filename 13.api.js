const http = require("http");

let users = [];
const server = http.createServer((req, res) => {

    //Get Request
    if (req.url === "/api/users/" 
    && req.method === "GET") {

        res.writeHead(200, 
            { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
    }

    // POST Data
    if (req.url === "/api/users/" && req.method === "POST") {
        try {
            let body = "";
            // Listen for data event
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            // Listen for end event
            req.on("end", async () => {
                let user = JSON.parse(body);
                users.push(user);//insert data
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end("User Inserted Successfully");
            });
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
    }

    // Get User By Id
    if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
        try {
            const id = req.url.split("/")[3];
            const found = users.findIndex((value) => value.id == id);
            if (found >= 0) {
                res.end(JSON.stringify(users[found]));
            } else {
                res.end("No user available");
            }
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
    }

    // Update User By Id
    if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "PUT") {
        try {
            const id = req.url.split("/")[3];
            const found = users.findIndex((value) => value.id == id);
            if (found >= 0) {
                let body = "";
                // Listen for data event
                req.on("data", (chunk) => {
                    body += chunk.toString();
                });
                // Listen for end event
                req.on("end", async () => {
                    let user = JSON.parse(body);
                    users[found]=user//assign new object to that matahced index
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end("User Updated Successfully");
                });
            } else {
                res.end("No user available");
            }
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
    }

    // DELETE API
    if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "DELETE") {
        try {
            const id = req.url.split("/")[3];
            console.log(id)
            const found = users.findIndex((value) => value.id == id);
            if (found >= 0) {
                users.splice(found, 1);
                res.end("User deleted successfully");
            } else {
                res.end("No user available to delete");
            }
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
    }
});


server.listen(5000, () => {
    console.log(`Server is running on port no 5000`);
});