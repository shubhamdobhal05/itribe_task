
const connect = require("./configs/db")  //importing mongoose form db

const app = require("./index");


app.listen(2345, async function() {
    await connect();
    console.log("listening to port 2345");
})