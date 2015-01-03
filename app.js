var koa = require("koa");

var app = koa();

// x-response-time
app.use(function *(next){
    var start = new Date();
    yield next;
    var ms = new Date() - start;
    this.set('X-Response-Time', ms + 'ms');
});

// logger
app.use(function *(next){
    var start = new Date();
    yield next;
    var ms = new Date() - start;
    console.log('%s %s - %s ms', this.method, this.url, ms);
});

// ----- response -----

// static html

// assets

// api
app.use(function *(){
    this.body = "This is the KommunalCrowd API";
});

// app start
app.listen(3000);