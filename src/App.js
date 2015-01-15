var koa = require("koa");

var Logger = require("./middleware/Logger").Logger;

var app = koa();

exports.App = {
    init: function (port) {
        console.log("Init the app");

        // x-response-time
        app.use(Logger.xResponseTime);

        // logger
        app.use(Logger.executionTime);

        // ----- response -----

        // static html

        // assets

        // api
        app.use(function *() {
            this.body = "This is the KommunalCrowd API";
        });

        // app start
        app.listen(port);
    }
};