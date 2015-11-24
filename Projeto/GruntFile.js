module.exports = function(grunt){
	
 grunt.initConfig({
  sass:{
        options: {
            
                 },
        dist: {
            files: {
                	'sass/desktop.css': 'sass/desktop.scss',
					'sass/style.css': 'sass/style.scss',
					'sass/skel.css': 'sass/skel.scss'
                   }
              }
       }
 });
 
 grunt.loadNpmTasks('grunt-contrib-sass');	
 grunt.registerTask('default', ['sass']);
 
};