var koa = require("koa");

var Logger = require("./middleware/Logger").Logger;

var app = koa();

exports.App = {
    init: function () {
        console.log("Init the app");

        // x-response-time
        app.use(function *(next) {
            var start = new Date();
            yield next;
            var ms = new Date() - start;
            this.set('X-Response-Time', ms + 'ms');
        });

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
        app.listen(3000);
    }
};