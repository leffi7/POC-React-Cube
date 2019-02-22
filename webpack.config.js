var webpack           = require('webpack'),
	path              = require('path');

module.exports = {
	entry: {
		app: './webpack/app.js'
		//head: './webpack/head.js'
	},
	output: {
        sourceMapFilename: "../maps/[name].js.map",
        path: path.join(__dirname, "../_app/assets/js"),
		filename: '[name].js'
    },
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false }),
		/*new webpack.DefinePlugin({
			'process.env':{
				'NODE_ENV': JSON.stringify('production')
			}
		}),*/
		//new webpack.optimize.CommonsChunkPlugin("common.js")
	],
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					//cacheDirectory: true,
					presets: ['react', 'es2015']
				}
			},
			{ test: /\.json$/, loader: 'json' }
		]
	}
};