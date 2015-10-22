module.exports ={
	entry: './components/Main.js',
	output: {
		path: './transpiled',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loader: 'babel'
		}]
	}
};