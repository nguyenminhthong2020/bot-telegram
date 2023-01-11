var express = require("express");
var homeController = require("../controllers/home.controller");

let router = express.Router();

const { TOKEN } = process.env;
const URI = `/webhook/${TOKEN}`;

let initWebRoutes = (app)=> {
    router.get("/", homeController.getHome);
    router.post(URI, homeController.postBot);
    // router.post("/webhook", webhookController.postWebhook);

    return app.use("/", router);
};

module.exports = initWebRoutes;