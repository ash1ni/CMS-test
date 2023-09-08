require('dotenv').config();
const express = require('express');
const { readFile, readFileSync, readdirSync, readdir } = require("fs");
const { execSync } = require("node:child_process");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

const port = process.env.NODE_PORT;

const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
  
app.use(cors(corsOptions));

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.json());

const pagesRoutes = require('./routes/pagesRoutes');

// Reading files from migration folder.
async function runDdlScripts() {
    const testFolder = "./db/";
    const stdout = execSync(`bash main.sh`, { encoding: "utf-8" });
}
runDdlScripts();

app.get("/", async (req, res) => {
    res.send("hello");
    // res.send(result);
});

app.get("/hello", async(req,res)=>{
    app.use((error, req, res, next) => {
      console.error(error); // Log the error
      res.status(500).json({ error: 'Internal server error' });
  })
    res.send('test route');
});


app.use('/pages', pagesRoutes);

// Start the server
app.listen(port,  () => {
    console.log(`Server is running on http://loaclhost:${port}`);
});


