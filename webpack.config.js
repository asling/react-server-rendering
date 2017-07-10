var webpack = require("webpack");
var path = require("path");

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-hot-middleware/client',
		path.resolve(__dirname,'client/index.js')
	],
	output: {
		path: path.resolve(__dirname,"build"),
		filename: '[name].[hash].js',
		publicPath: "/static/",
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				loader: 'babel-loader?presets[]=es2015&presets[]=react',
				exclude: /node_modules/,
			}
		]
	}
};