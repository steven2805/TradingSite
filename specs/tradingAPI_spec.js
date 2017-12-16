var assert = require('assert');
var tradingAPI = require('../public/tradingAPI.js');

describe('tradingAPI', function(){

    beforeEach(function(){

    });

    it("Should build correct URL", function(){
        assert.strictEqual(urlBuilder("ea", "To be completed at later date"));
    })
});