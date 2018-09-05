const assert = require('chai').assert;
const defaultFunction = require('../default');

describe('default', function(){
    it('describe test', function() {
        let result = defaultFunction.defaultFunction();
        assert.typeOf(result, "string");
    })
});