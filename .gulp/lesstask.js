module.exports =  {

    src: {
        cwd: 'main-app/app/less/',
        src: 'import.less',
        dest: '.build/main-app/app/css',
        expand: true,
        ext: '.min.css'
    },

    options:{
        compress: true,
        csslint:{
            'unique-headings':false,
        }
    }
};
