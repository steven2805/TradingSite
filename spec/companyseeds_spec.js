var assert = require('assert');
var Companies = require('../client/src/companyseeds');


describe('company seeds testing', function(){



    beforeEach(function(){

    });

    it("Should display a hashmap with company information", function(){
        var company = new Companies(12);
        console.log(company.listing);
        // var company = new Companies();
        assert.strictEqual(company,"something" );
    });
})