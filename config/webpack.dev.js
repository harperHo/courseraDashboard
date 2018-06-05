var argv = process.argv.slice(2)
process.env.CONFIG = argv[0] || 'ci'
const path = require('path');
const paths = require('./paths');
const configFile = require(`./config-${process.env.CONFIG}.json`)
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'cheap-module-source-map',
	entry: paths.appIndexJs,
	output: {
		filename: 'static/js/bundle.js',
		chunkFilename: 'static/js/[name].chunk.js',
		path: paths.appBuild,
		pathinfo: true,
		publicPath: paths.publicPath,
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				include: paths.appSrc,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
		    test: /\.(css|scss|sass)$/,
		    use: [
		      {
		        loader: 'style-loader'
		      },
		      {
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							minimize: true,
						}
		      },
		      {
						loader: 'postcss-loader',
						ident: 'postcss',
		        options: {
							plugins: function () {
								return [
									require('postcss-import')({}),
									require('postcss-cssnext')({
										browsers: [
											'>1%',
											'last 4 versions',
											'Firefox ESR',
											'not ie < 9', // React doesn't support IE8 anyway
										],
									}),
									require('precss')({}),
									require('postcss-mixins')({}),
								]
							}
		        }
					},
		    ]
		  },
		  {
		  	test: /\.(ttf|woff|woff2)$/,
			  use: {
			    loader: "url-loader",
			    options: {
			      limit: 8192,
			    },
			  },
			},
			{
		  	test: /\.svg$/,
			  use: {
			    loader: "url-loader",
			    options: {
			      limit: 8192,
			    },
			  },
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
	],
	externals: {
    'Config': JSON.stringify(configFile),
  },
	devServer: {
		port: 8080,
		open: true,
		overlay: true,
		contentBase: path.resolve(__dirname, '../')
	},
}
