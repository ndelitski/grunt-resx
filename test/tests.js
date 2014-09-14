var grunt = require('grunt'),
    lib = require('./../lib');

module.exports = {
    setUp: function (done) {
        done();
    },

    readKeysFromFile: function (test) {
        var resxFile = grunt.file.read('./fixtures/ErrorStrings.resx'),
            keys = lib.getKeysFromResxFile(resxFile);

        test.expect(1);
        test.ok(resxFile!='');
        test.done();
    },

    tearDown: function(done) {
        done();
    }

};
