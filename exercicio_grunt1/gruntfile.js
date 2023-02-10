module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          //local final  //local de origem
          "main.css": "main.less",
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          //local final  //local de origem
          "main.min.css": "main.less",
        },
      },
      uglify: {
        target: {
          files: {
            //local final  //local de origem
            "main.min.js": "main.js",
          },
        },
      },
    },
  });
  //configuração inicial dos plugins"
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  //configuração default grunt
  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", ["less", "uglify"]);
};
