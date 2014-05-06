module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON("mask-password.jquery.json"),

		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author.name %>\n" +
				" *  Under <%= pkg.licenses[0].type %> License\n" +
				" */\n"
		},

		concat: {
			dist: {
				src: ["dist/jquery.mask-password.js"],
				dest: "dist/jquery.mask-password.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		jshint: {
			files: ["dist/jquery.mask-password.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		uglify: {
			dist: {
				src: ["dist/jquery.mask-password.js"],
				dest: "dist/jquery.mask-password.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		coffee: {
			compile: {
				files: {
					"dist/jquery.mask-password.js": "src/jquery.mask-password.coffee"
				}
			}
		}

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-coffee");

	grunt.registerTask("default", ["coffee", "concat", "uglify"]);

};
