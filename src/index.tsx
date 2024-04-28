import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
//import { Provider } from 'react-redux'
//import { store } from './store/store'
import App from './app/app'
import './assets/styles/globals.scss'

const domNode = document.querySelector('#root') as HTMLDivElement,
	root = createRoot(domNode)

root.render(
	<StrictMode>
		{/*<Provider store={store}>*/}
		<App />
		{/*</Provider>*/}
	</StrictMode>
)
