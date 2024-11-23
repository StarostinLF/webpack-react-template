import { useEffect } from 'react'
import { Outlet } from 'react-router'
import { Helmet } from 'react-helmet-async'

import Header from '../header/header'
import Footer from '../footer/footer'
import { fetсhGetCounters } from '../../services/slices/counter-slice'

export default function App() {
	useEffect(() => {
		fetсhGetCounters()
	}, [])

	/* Разметка */
	return (
		<>
			<Helmet prioritizeSeoTags>
				<title>Webpack + React-SPA + TS</title>
				<meta name='description' content='Описание страницы' />
				<meta
					name='keywords'
					content='[ключевые, слова, для, страницы, через, запятую]'
				/>
				<meta name='author' content='Автор страницы' />
				<link rel='canonical' href='[https://example.com]' />
				<meta
					property='og:title'
					content='Шаблон Webpack-сборки React-SPA-приложения на TypeScript'
				/>
				<meta
					property='og:description'
					content='[Описание для социальных сетей]'
				/>
				<meta
					property='og:image'
					content='[URL изображения для социальных сетей]'
				/>
				<meta property='og:url' content='[https://example.com]' />
			</Helmet>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}
