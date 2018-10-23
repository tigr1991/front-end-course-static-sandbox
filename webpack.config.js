const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: './src/index.js',
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			inject: true,
			template: './index.html',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		contentBase: './dist',
		hot: true,
	},
	mode: 'development',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.styl$/,
				use: ['style-loader', 'css-loader', 'stylus-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.(html)$/,
				use: ['html-loader'],
				exclude: /node_modules/,
			},
		],
	},
}
