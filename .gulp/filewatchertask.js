
module.exports =  {

    scripts: {
        files:'main-app/app/scripts/**/*.js',
        tasks:['jshint','clean:scripts','concat:scripts'],
        options:{
            spawn:false
        }
    },

    images: {
        files:'main-app/app/images/*.*',
        tasks:['clean:images','copy:images'],
        options:{
            spawn:false
        }
    },

    grunt:{
        files:'.gulp/*.js',
        tasks:['nostart'],
        options:{
            spawn:false
        }
    },

    less: {
        files:'main-app/app/less/*.*',
        tasks:['clean:css','less'],
        options:{
            spawn:false
        }
    },

    html: {
        files:'main-app/app/index.html',
        tasks:['clean:html','copy:html'],
        options:{
            spawn:false
        }
    },

    angular:{
        files:'angular/*',
        tasks:['nostart'],
        options:{
            spawn:false
        }
    },

    services:{
        files:'main-app/app/scripts/providers/*',
        tasks:['nostart'],
        options:{
            spawn:false
        }
    },

    audio: {
            files:'main-app/app/sounds/*.*',
            tasks:['clean:audio','copy:audio'],
            options:{
            spawn:false
            }
    },

};

