var should = require('should');
var request = require('request');

var app = require('../../src/App.js').App;

describe('App', function () {
    it('listen on defined port', function (done) {

        // define port
        var port = 4242;

        // start server
        app.init(port);

        // made request
        request('http://localhost:' + port, function (error, response, body) {
            (error === undefined).should.be.false;
            response.should.not.be.null;
            response.statusCode.should.be.exactly(200).and.be.a.Number;
            done();
        });
    });

    it('not listen on not defined port', function (done) {
        // define port
        var port = 4243;
        var undefinedPort = port + 1;

        // start server
        app.init(port);

        // made request
        request('http://localhost:' + undefinedPort, function (error, response, body) {
            (response === undefined).should.be.true;
            error.should.not.be.null;
            done();
        });
    });
});