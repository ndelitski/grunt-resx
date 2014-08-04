var grunt = require('grunt');

module.exports = {
    setUp: function (done) {
        done();
    },

    initConfig: function (test) {
        test.expect(1);
        test.deepEqual();
        test.done();
    },

    tearDown: function(done) {
        done();
    }

};
