const gulp = require('gulp');
const server = require('gulp-webserver');

gulp.task('server',()=>{
    gulp.src('./src')
    .pipe(server({
        host:'localhost',
        port:8000,
        livereload:true,
        open:true,
        proxies:[
            {source:'/sum',target:'http://localhost:3000/sum'},
            {source:'/pre',target:'http://localhost:3000/pre'},
            {source:'/addcom',target:'http://localhost:3000/addcom'},
            {source:'/addpay',target:'http://localhost:3000/addpay'},
        ]
    }))
})