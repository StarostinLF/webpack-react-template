const path = require('path'), // Конвертация относительного путя в абсолютный
	production = process.env.NODE_ENV === 'production',
	HTMLWebpackPlugins = require('html-webpack-plugin'),
	MiniCssExtractPlugin = require('mini-css-extract-plugin'),
	{ CleanWebpackPlugin } = require('clean-webpack-plugin'),
	webpack = require('webpack'),
	Dotenv = require('dotenv-webpack')

module.exports = {
	entry: path.resolve(__dirname, '..', './src/index.tsx'), // Точка входа в приложение содержит абсолютный путь к index.ts
	output: {
		path: path.resolve(__dirname, '..', './dist'), // Путь сборки проекта
		filename: production
			? 'static/scripts/[name].[contenthash].js' // добавляем хеш к имени файла, если запускаем в режиме production
			: 'static/scripts/[name].js', // Имя бандла
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.[tj]sx?$/, // Регулярное выражение, содержащее информацию, какие файлы должны обрабатываться
				use: [
					{
						loader: 'ts-loader', // ts-loader для работы с jsx- и tsx-файлами
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					production ? MiniCssExtractPlugin.loader : 'style-loader', // В production создаётся физический файл в dist, в dev — добавляются стили в <style> в html-файле
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[name]__[local]__[hash:base64:5]',
								auto: /\.module\.\w+$/i,
							},
							importLoaders: 2, // Значение 2 — некоторые трансформации PostCSS применяются до css-loader.
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
		extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'], // Файлы, с которыми будет работать webpack
	},
	plugins: [
		new HTMLWebpackPlugins({
			template: path.resolve(__dirname, '..', './public/index.html'),
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'static/styles/index.css',
		}),
		// Плагин позволяет установить переменные окружения, можно переопределить переменную из блока script файла package.json
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'development', // Значение по умолчанию 'development', если переменная process.env.NODE_ENV не передана при вызове сборки
		}),
		new Dotenv(),
	],
}

/*
Заметка
Для того чтобы ts-loader корректно отработал, нужен tsconfig, его можно создать вручную, а можно создать автоматически.
Чтобы проинициализировать его автоматически, можно установить пакет typesctipt глобально или использовать npx, выполнив команду npx tsc --init.
После создания конфига нужно включить "allowJs": true, поменять "jsx": "react" и включить карту ресурсов "sourceMap": true
*/
