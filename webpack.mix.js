// webpack.mix.js

let mix = require('laravel-mix').options({
    processCssUrls: false
});

mix.js('src/app.js', 'dist').vue({ version: 2 })
   .sass('src/app.scss', 'css');
