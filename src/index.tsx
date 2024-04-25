import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './app/app'
import './assets/styles/globals.scss'

const domNode = document.querySelector('#root') as HTMLDivElement,
	root = createRoot(domNode)

root.render(
	<StrictMode>
		<App />
	</StrictMode>
)
