var fs = require('fs');
var fileExists = fs.existsSync;
var mkdirp = require('mkdirp');
var path = require('path');
var webpack = require('webpack');
var React = require('react');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var CODE = __dirname;
var IGNORE = ['shared'];

var galleries = process.env.NODE_ENV === 'galleries';
var index = galleries ? 'index_2' : 'index';

makeIndex('app');

var sassLoaders = [
  "css-loader",
  "autoprefixer-loader?browsers=last 2 version",
  "sass-loader?indentedSyntax=sass&includePaths[]=" + path.resolve(CODE, "./src"),
];

module.exports = {

  devtool: 'eval',

  entry: { app:['./src/'+index]},

  output: {
    filename: "[name].js",
    path: process.env.NODE_ENV === 'production' ? './dist' : './build',
    publicPath: "/",
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
    new ExtractTextPlugin("[name].css")
  ]

};

function makeIndex(dir) {
  var index = process.env.NODE_ENV === 'production' ? './dist/index.html' : './build/index.html'
  if(galleries){
    fs.writeFileSync(index, makeGalleries('app'));
  } else {
    fs.writeFileSync(index, makeMarkup('app'));  
  }
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

function makeGalleries(mainFile) {
  return React.renderToStaticMarkup((
    React.DOM.html({},
      React.DOM.link({ rel: 'stylesheet', href: './' + mainFile + '.css' }),
      React.DOM.body({},
        React.DOM.div({ id: 'gallery1' }),
        React.DOM.div({ id: 'gallery2' }),
        React.DOM.script({ src: './' + mainFile + '.js' })
      )
    )
  ));
}
