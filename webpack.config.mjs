import path from 'path'
import { fileURLToPath } from 'url'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import { merge } from 'webpack-merge'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const production = process.env.NODE_ENV === 'production'

const commonConfig = {
	entry: path.resolve(__dirname, 'src/index.tsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: production
			? 'static/scripts/[name].[contenthash].js'
			: 'static/scripts/[name].js',
		publicPath: production ? 'auto' : '/',
	},
	module: {
		rules: [
			{
				test: /\.[tj]sx?$/,
				use: [
					{
						loader: 'ts-loader',
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: [
					production ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[hash:base64:5]',
								auto: /\.module\.\w+$/i,
								namedExport: false,
							},
							importLoaders: 2,
						},
					},
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(png|jpg|gif|webp)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/images/[hash][ext][query]',
				},
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/fonts/[hash][ext][query]',
				},
			},
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: ['@svgr/webpack', 'url-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'static/styles/index.css',
		}),
		new Dotenv(),
		new FaviconsWebpackPlugin({
			logo: path.resolve(__dirname, 'public/favicon.svg'),
			outputPath: 'static/favicons/',
			prefix: 'static/favicons/',
			inject: true,
		}),
	],
}

const developmentConfig = {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		static: path.resolve(__dirname, 'dist'),
		port: 8080,
		open: false,
		hot: true,
	},
	plugins: [new ReactRefreshWebpackPlugin()],
}

const productionConfig = {
	mode: 'production',
	devtool: false,
}

export default (envVars) => {
	const { env } = envVars
	const envConfig = env === 'production' ? productionConfig : developmentConfig
	const config = merge(commonConfig, envConfig)

	return config
}
