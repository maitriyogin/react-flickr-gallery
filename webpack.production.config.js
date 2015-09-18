var fs = require('fs');
var rmdir = require( 'rmdir' );
var fileExists = fs.existsSync;
var mkdirp = require('mkdirp');
var path = require('path');
var webpack = require('webpack');
var React = require('react');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'dist');
var mainPath = path.resolve(__dirname, 'src', 'index.js');

var CODE = __dirname;
var IGNORE = ['shared'];

var index = 'index';

// remove dist
if(fs.existsSync(buildPath)){
  rmdir(buildPath, function ( err, dirs, files ){
  console.log( dirs );
  console.log( files );
  console.log( 'all files are removed' );
  fs.mkdirSync(buildPath);
  makeIndex('app');
});
}

var sassLoaders = [
  "css-loader",
  "autoprefixer-loader?browsers=last 2 version",
  "sass-loader?indentedSyntax=sass&includePaths[]=" + path.resolve(CODE, "./src"),
];

module.exports = {

  devtool: 'source-map',

  entry: mainPath,

  output: {
    path: buildPath,
    filename: "app.js"
  },

  resolve: {
    extensions: [ '', '.js', '.sass' ],
    modulesDirectories: ['src', 'node_modules']
  },

  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!")),
      },
      { test: require.resolve('jquery'), loader: "expose?jQuery" },
      {test: /\.png/, loader: 'url?limit=100000&mimeetype=image/png' }
    ]
  },

  plugins: [
    new ExtractTextPlugin("app.css")
  ]

};

function makeIndex(dir) {
  var index = './dist/index.html';
  fs.writeFileSync(index, makeMarkup('app'));  
}

function makeMarkup(mainFile) {
  return React.renderToStaticMarkup((
    React.DOM.html({},
      React.DOM.link({ rel: 'stylesheet', href: './' + mainFile + '.css' }),
      React.DOM.body({},
        React.DOM.div({ id: 'app' }),
        React.DOM.script({ src: './' + mainFile + '.js' })
      )
    )
  ));
}
