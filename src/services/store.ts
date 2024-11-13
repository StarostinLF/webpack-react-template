import { combineSlices, configureStore } from '@reduxjs/toolkit'
import {
	useDispatch as dispatchHook,
	useSelector as selectorHook,
} from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import _ from 'lodash'

/*const saveToLocalStorage = (state: RootState) => {
	try {
		const { user } = state

		if (!user.error) {
			const appData = JSON.stringify({
				user: user.user,
			})

			localStorage.setItem('localData', appData)
		} else localStorage.removeItem('localData')
	} catch (e) {
		console.warn('Could not save state', e)
	}
}

const loadFromLocalStorage = () => {
	try {
		const appData = localStorage.getItem('localData')

		if (appData === null) return undefined

		const { user } = JSON.parse(appData)

		return {
			user: { ...userState, user },
		}
	} catch (e) {
		console.warn('Could not load state', e)

		return undefined
	}
}

const preloadedState = loadFromLocalStorage()*/

const rootReducer = combineSlices(/* вставить слайсы */)

export const store = configureStore({
	reducer: rootReducer,
	//preloadedState,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

store.subscribe(
	_.debounce(() => {
		//saveToLocalStorage(store.getState())
	}, 1000)
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useDispatch: () => AppDispatch = dispatchHook
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook
