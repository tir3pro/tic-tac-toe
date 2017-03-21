module.exports = {
	/* main app file */
	entry: './src/index.jsx',
	/* bundle file path */
	output: {
		filename: 'bundle.js',
		path: __dirname + '/public'
	},
	/* webpack dev-server settings */
	devServer: {
		inline: true,
		contentBase: './public',
		port: 3000
	},
	/* loaders settings */
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader', 'babel-loader']
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	/* for convinient debugging */
	devtool: 'eval-source-map',
	/* for finding not only *.js files by webpack => for importing components */
	resolve: {
		extensions: ['.js', '.jsx']
	}
};