var { src, dest, parallel, series, watch } = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const del = require('del');
const data = require('gulp-data');
var path = require('path');

var appDir = path.dirname(require.main.filename);
const htmlPath = './src/**/*.html';
const cssPath = './src/**/*.css';
const assetsPath = './src/assets/**/**';

function getBlogData() {
    const blogs = [{
        2020: [{
            path: '/blogs/2020/walters-wools.html',
            title: "Walter's Wools"
        },
        {
            path: '/blogs/2020/very-vaccuum-birthday.html',
            title: "A Very Vaccuum Birthday"
        }
        ]}, {
        2019: [{
            path: '/blogs/2019/mr-makes-a-word.html',
            title: "Mr. Makes-A-Word"
        }
        ]}, {
        2018: [{
            path: '/blogs/2018/cards.html',
            title: 'Cards'
        }
        ]}, {
        2017: [{
            path: '/blogs/2017/sqwak.html',
            title: 'Sqwak'
        }]
    }];

    return {blogs: blogs};
}

function html () {
    return src(htmlPath)
        .pipe(data(getBlogData))
        .pipe(nunjucksRender({
            path: ['./src'] // String or Array
        }))
        .pipe(dest('docs'));
};

function css () {
    return src(cssPath)
        .pipe(dest('docs'));
};

function assets() {
    return src(assetsPath)
        .pipe(dest('docs/assets'));
};

function clean () {
    return del(['docs']);
};


const runTasks = series(clean, parallel(html, css, assets));

exports.default = function (done) {
    runTasks();
    done();
}

exports.watch = function () {
    runTasks();

    watch(cssPath, css);
    watch(htmlPath, html);
}