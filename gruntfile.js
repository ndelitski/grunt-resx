"use strict"

module.exports = function(grunt){

    grunt.initConfig({
        nodeunit: {
            tests: ['test/tests.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadTasks('./tasks');

    grunt.registerTask('default', ['nodeunit'])
};