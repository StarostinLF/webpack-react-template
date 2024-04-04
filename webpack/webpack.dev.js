const path = require('path'), // Конвертация относительного путя в абсолютный
	ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		static: path.resolve(__dirname, './dist'), // Путь, куда "смотрит" режим разработчика
		// compress: true, // Это ускорит загрузку в режиме разработки
		port: 8080, // Порт для открытия сайта на localhost:8080
		open: true, // Сайт открывается при запуске npm run dev
		hot: true,
	},
	plugins: [new ReactRefreshWebpackPlugin()],
}
