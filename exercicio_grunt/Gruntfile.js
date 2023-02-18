module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          //local final  //local de origem
          "dev/styles/main.css": "src/styles/main.less",
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          //local final  //local de origem
          "dist/styles/main.min.css": "src/styles/main.less",
        },
      },
    },
    uglify: {
      target: {
        files: {
          //local final  //local de origem
          "dist/scripts/main.min.js": "src/scripts/main.js",
        },
      },
    },
  });
  //configuração inicial dos plugins"
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  //configuração default grunt
  grunt.registerTask("default", ["less:development"]);
  grunt.registerTask("build", ["less:production", "uglify"]);
};
