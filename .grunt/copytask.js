module.exports =  {
        images: {
            cwd: '',
            src: 'main-app/app/images/*',
            dest: '.build/',
            expand:true
        },

        html:{
            cwd: '',
            src: 'main-app/app/index.html',
            dest: '.build/',
            expand:true
        },

        angular:{
            cwd:'',
            src:'angular/*',
            dest: '.build/main-app/app',
            expand:true
        },
};