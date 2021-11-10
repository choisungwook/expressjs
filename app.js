import express from "express";
import tweetRouter from "./router/tweet.js";
const port = 3000

const app = express();
app.use("/api/v1/tweets", tweetRouter);


app.get("/healthcheck", (req, res) => {
    res.send("healthcheck");
});


// default not found
app.use((req, res, next) => {
    res.sendStatus(404);
});

// default server error
app.use((error, req, res, next) => {
    console.log(`500 error: ${error}`);
    res.sendStatus(500);
});

app.listen(port, () => {
    console.log("server start")
});