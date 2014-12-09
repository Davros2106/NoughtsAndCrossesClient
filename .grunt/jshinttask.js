
module.exports =  {

    script: {
        cwd: '',
        src: 'main-app/app/scripts/*.js',
        dest: '.build/',
        expand: true
    },

    file: {
        cwd: '',
        src: '.grunt/*.js',
        dest: '.build/',
        expand: true
    },

    grunt: {
        cwd: '',
        src: 'gruntfile.js',
        dest: '.build/',
        expand: true
    },

    options: {

        quotmark: 'single'

    },

    services: {
        cwd: '',
        src: 'main-app/app/scripts/services',
        dest: '.build/',
        expand: true
    }

};
