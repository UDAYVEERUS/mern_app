const express = require('express')
require('dotenv').config()
const connectToMongo = require('./common/db')
connectToMongo()

const app = express()
app.use(express.json())

const body_parser = require("body-parser");
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());


// const cors = require('cors')
const cors=require("cors");

// using cors origin
app.use(cors({
  origin: [

		"http://localhost:3000",
		// "http://localhost:4004",
		
	]
})) 

// user route
app.use("/user", require('./user/route'))

// item route
app.use("/items",require('./items/route'))

// port 3022
const port = process.env.PORT

// listening server
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
})
