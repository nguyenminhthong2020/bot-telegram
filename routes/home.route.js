var express = require("express");
var homeController = require("../controllers/home.controller");

let router = express.Router();

let initWebRoutes = (app)=> {
    router.get("/", homeController.getHome);
    router.post("/bot", homeController.getWebhook);
    // router.post("/webhook", webhookController.postWebhook);

    return app.use("/", router);
};

module.exports = initWebRoutes;