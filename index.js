const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const fs = require("fs")
const path = require("path")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const { static } = require("express")

dotenv.config()
const URI = process.env.URI_DB_CONTACTS

const accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" })
const wordsRouter = require("./routes/words.routes")
const collocationsRouter = require("./routes/collocations.routes");
const usersRouter = require("./routes/users.routes")

const PORT = process.env.PORT || 8080

class Server {
  start() {
    this.server = express()
    this.initialMiddleware()
    this.initialRoutes()
    this.listen()
    this.initMongoose()
  }

  initialMiddleware() {
    this.server.use(express.json())
    this.server.use(
      cors({
        origin: "*",
      })
    )
    this.server.use(morgan("combined", { stream: accessLogStream }))
  }

  initialRoutes() {
    this.server.use("/", usersRouter)
    this.server.use("/collocations", collocationsRouter);
    this.server.use("/words", wordsRouter);
    this.server.use("/images", express.static("public"))
  }

  listen() {
    this.server.listen(PORT, () => {
      console.log("Server is listening on port: ", PORT)
    })
  }

  async initMongoose() {
    try {
      if (await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })) {
        console.log("Database connection successful")
      }
    } catch (e) {
      console.log(e)
    }
  }
}

const server = new Server()
server.start()
