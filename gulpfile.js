var gulp = require('gulp');
//var connect = require('gulp-connect')
//var Proxy = require('gulp-connect-proxy')
var uglify = require('gulp-uglify');//压缩

var babel = require('gulp-babel');//es6的编译模块

var cleancss = require('gulp-clean-css');//将css压缩模块

var webserver = require('gulp-webserver'); 
//gulp.task('default', function() {
 // console.log('hello gulp')
//})
/*gulp.task('connect', function() {
  connect.server({
    // host: 'localhost',
    host: '127.0.0.1',
    port: 3000,
    livereload: true,
    proxies: [
      { source: '/api', target: 'http://jsonplaceholder.typicode.com/' },
    ],
    middleware: function(connect, opt) {
      opt.route = '/ajax'
      var proxy = new Proxy(opt)
      return [proxy]
    }
  })
})*/
gulp.task('buildJS',function(){
	gulp.src("./src/js/libs/*.js").pipe(gulp.dest("./dist/js/libs"))
	gulp.src("./src/js/*.js")
	.pipe(babel({
		presets:['env']
	}))
	.pipe(uglify())
	.pipe(gulp.dest("./dist/js"))
})
gulp.task("buildCSS",()=>{
	gulp.src("./src/css/*.css")
	.pipe(cleancss())
	.pipe(gulp.dest("./dist/css"))
})
gulp.task("buildHTML",()=>{
	gulp.src("./src/html/*.html")
	.pipe(gulp.dest("./dist/html"))
})
gulp.task('webserver', function(){
	gulp.src('src')
	.pipe(
	webserver({
		https:true,
		port: 3001,//端口
		host: '127.0.0.1',//域名
		liveload: true,//实时刷新代码。不用f5刷新
		directoryListing: true,
		open:true,
		proxies:[
			{
				source:'/api',
				target:'https://m.lagou.com/listmore.json'
			},
			{
				source:'/ap',
				target:'https://www.lagou.com/gongsi'
			},
			{
				source:'/appi',
				target:'https://www.lagou.com/upload/ltm/oss.html?u=/gongsi/'
			},
			{
				source:' ',
				target:'https://www.godiva.cn/shoppingcart/countList.json'
			}
		]
			
		
		
	})
	)
});

gulp.task('default', ['webserver'], function() {
  console.log('成功')
})
