//引入css模块打包工具，将css打包成一个文件后引入页面中
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//压缩打包后的css文件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//自动生成html，自动引入打包后的js、css
const HtmlWebpackPlugin = require('html-webpack-plugin')
//清空先前打包的文件
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'production', //默认production  development
	entry: { //多个入口，属性名可任意，代表打包的chunk名（块名）
		index: './js/index/index.js',
		table: './js/table/table.js',
		tableDetails: './js/tableDetails/tableDetails.js',
	},
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name].js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		},{
			test: /\.css$/,
			use: [{
					loader: MiniCssExtractPlugin.loader,
					options: {
						esModule: true,
					}
				},
				'css-loader',
				'postcss-loader', //兼容前缀
			]
		}, {
			test: /(\.png|\.jpg|\.gif)$/,
			use: [{
				loader: 'url-loader',
				options: { //使用该loader时使用的配置
					// limit: 8192	,
					// name: '[name].[ext]'//file-loader的配置，配置打包后的文件名. [name][hash:6].[ext]，hash后面冒号表示取的hash长度
				}
			}]
		}]
	},
	plugins: [
		//希望打包后生成index.html和table.html，同时引入对应的js和css
		new HtmlWebpackPlugin({
			filename: 'index.html', //生成的文件名字
			template: './index.html', //以根目录的index.html为模板
			chunks: ['index'], //对应多入口块名，即键名
			minify: {
				collapseWhitespace: true, //是否压缩生成后的html，默认false
				removeComments: true, //是否去掉注释，默认false
			}
		}),
		new HtmlWebpackPlugin({
			filename: 'table.html', //生成的文件名字
			template: './table.html', //以根目录的index.html为模板
			chunks: ['table'], //对应多入口块名，即键名
			minify: {
				collapseWhitespace: true, //是否压缩生成后的html，默认false
				removeComments: true, //是否去掉注释，默认false
			}
		}),
		new HtmlWebpackPlugin({
			filename: 'tableDetails.html', //生成的文件名字
			template: './tableDetails.html', //以根目录的index.html为模板
			chunks: ['tableDetails'], //对应多入口块名，即键名
			minify: {
				collapseWhitespace: true, //是否压缩生成后的html，默认false
				removeComments: true, //是否去掉注释，默认false
			}
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
		}),
		new OptimizeCssAssetsPlugin()
		// new CleanWebpackPlugin()
	],
	devServer: {
		open: false,
		port: 8080,
		// contentBase: './dist',
	},
	performance: {
	    hints: false
	},
	optimization: {
		splitChunks: {
		  chunks: 'all'
		}
	}
}
