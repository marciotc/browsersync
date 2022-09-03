const browserSync = require('browser-sync');

const server = browserSync.create()

server.init({
    watch:true,
    server: {
        baseDir: "./src"
    }
})
server.watch([
    "src/**/*.css",
    "src/**/*.js",
    "src/**/*.html"
])
