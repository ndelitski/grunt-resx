"use strict"

module.exports = function(grunt){

    grunt.initConfig({
        nodeunit: {
            tests: ['test/tests.js']
        },

        resx: {

        }
    });

    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadTasks('./tasks');

    grunt.registerTask('default', ['nodeunit'])
};