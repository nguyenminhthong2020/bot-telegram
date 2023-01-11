require("dotenv").config();
var express = require("express");

var initWebRoute = require("./routes/home.route");
var cors = require("cors");
var axios = require("axios");
var bodyParser = require("body-parser");

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init all web routes
initWebRoute(app);

let port = process.env.PORT || 5004;

const { TOKEN } = process.env;
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;
const init = async () => {
   const res = await axios.get(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`);
 };

app.listen(port, async ()=>{
   console.log(`App is running at the port ${port}`) ;
   await init();
});