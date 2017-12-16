var assert = require('assert');
var Companies = require('../client/src/companyseeds');


describe('company seeds testing', function(){


    it("Should display a hashmap with company information", function(){
        var data = {"apple":"AAPPL","Microsoft":"MRSF","Google":"goog"};
        var company = new Companies(data);
        console.log(company.listing);
        // var company = new Companies();
        assert.deepEqual(company.listing,{"apple":"AAPPL","Microsoft":"MRSF","Google":"goog"} );
    });
})