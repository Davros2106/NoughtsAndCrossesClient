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

        scripts:{
            cwd: '',
            src: 'main-app/scripts/*js',
            dest: '.build/main-app/scripts/built.js',
            expand:true
        }




};








