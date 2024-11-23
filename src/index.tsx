import './assets/styles/reset.scss'
import './assets/styles/globals.scss'
import './assets/styles/index.scss'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router'
import { HelmetProvider } from 'react-helmet-async'

import { store } from './services/store'

import App from './components/app/app'
import MainPage from './pages/main-page/main-page'
import SecondPage from './pages/page-2/second-page'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index element={<MainPage />} />
			<Route path='/page-2' element={<SecondPage />} />
		</Route>
	)
)

createRoot(document.querySelector('#root') as HTMLDivElement).render(
	<StrictMode>
		<Provider store={store}>
			<HelmetProvider>
				<RouterProvider router={router} />
			</HelmetProvider>
		</Provider>
	</StrictMode>
)
