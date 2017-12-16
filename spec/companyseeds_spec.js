var assert = require('assert');
var Companies = require('../client/src/companyseeds');


describe('company seeds testing', function(){


    it("Should display a hashmap with all companies (default data)", function(){
        var data = {"apple":"AAPPL","Microsoft":"MRSF","Google":"goog"};
        var company = new Companies(data);
        console.log(company.listing);
        assert.deepEqual(company.listing,{"apple":"AAPPL","Microsoft":"MRSF","Google":"goog"} );
    });

    it("Should display a hashmap with all companies (Custom data)", function(){
        var data = {"apple":"AAPPL","Microsoft":"MRSF","Google":"goog","additional testing":"Additional testing"};
        var company = new Companies(data);
        console.log(company.listing);
        assert.deepEqual(company.listing,{"apple":"AAPPL","Microsoft":"MRSF","Google":"goog","additional testing":"Additional testing"});
    });
})