import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './components/app'
import './assets/styles/index.scss'

const domNode = document.querySelector('#root') as HTMLDivElement,
	root = createRoot(domNode)

root.render(
	<StrictMode>
		<App />
	</StrictMode>
)
