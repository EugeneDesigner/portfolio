const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const pkg = require('./package.json');

const isDebug = global.DEBUG === false ? false : !process.argv.includes('--release');
const isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v');
const useHMR = !!global.HMR; // Hot Module Replacement (HMR)
const babelConfig = Object.assign({}, pkg.babel, {
  babelrc: false,
  cacheDirectory: useHMR,
});
const autoprefixer = require('autoprefixer');


const config = {


  context: __dirname,


  entry: [
    './main.js',
  ],

  // Options affecting the output of the compilation
  output: {
    path: path.resolve(__dirname, './public/dist'),
    publicPath: 'http://localhost:3000/dist/',
    filename: isDebug ? '[name].js?[hash]' : '[name].[hash].js',
    chunkFilename: isDebug ? '[id].js?[chunkhash]' : '[id].[chunkhash].js',
    sourcePrefix: '  ',
  },

  // Switch loaders to debug or release mode
  debug: isDebug,


  devtool: isDebug ? 'source-map' : false,


  stats: {
    colors: true,
    reasons: isDebug,
    hash: isVerbose,
    version: isVerbose,
    timings: true,
    chunks: isVerbose,
    chunkModules: isVerbose,
    cached: isVerbose,
    cachedAssets: isVerbose,
  },


  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
      __DEV__: isDebug,
    }),

    new AssetsPlugin({
      path: path.resolve(__dirname, './public/dist'),
      filename: 'assets.json',
      prettyPrint: true,
    }),
  ],

  // Options affecting the normal modules
  module: {
    loaders: [

      {
        test: /.*/,
        include: [path.resolve(__dirname, 'pages/*')],
        loader: 'bundle?lazy&name=page'
      },
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, './actions'),
          path.resolve(__dirname, './components'),
          path.resolve(__dirname, './core'),
          path.resolve(__dirname, './pages'),
          path.resolve(__dirname, './main'),
          path.resolve(__dirname, './shared')
        ],
        loader: `babel-loader?${JSON.stringify(babelConfig)}`,
      },
      {
        test: /\.css/,
        loaders: [
          'style-loader',
          `css-loader?${JSON.stringify({
            sourceMap: isDebug,

            modules: true,
            localIdentName: isDebug ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
            minimize: !isDebug,
          })}`,
          'postcss-loader',
        ],
      },
      {
        test: /\.scss/,
        include: [
          path.resolve(__dirname, './components'),
          path.resolve(__dirname, './pages'),
          path.resolve(__dirname, './core'),
        ],
        loaders: [
          'style-loader',
          `css-loader?${JSON.stringify({
            sourceMap: isDebug,

            modules: true,
            localIdentName: isDebug ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',

            minimize: !isDebug,
          })}`,
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.md$/,
        loader: path.resolve(__dirname, './utils/markdown-loader.js'),
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000&name=[name]',
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
      },
    ],
  },

postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]

}

// Optimize the bundle in release (production) mode
if (!isDebug) {
  config.plugins.push(new webpack.optimize.DedupePlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: isVerbose } }));
  config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
}

// Hot Module Replacement (HMR) + React Hot Reload
if (isDebug && useHMR) {
  babelConfig.plugins.unshift('react-hot-loader/babel');
  config.entry.unshift('react-hot-loader/patch', 'webpack-hot-middleware/client');
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new webpack.NoErrorsPlugin());
}

module.exports = config;
