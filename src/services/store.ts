import { combineSlices, configureStore } from '@reduxjs/toolkit'
import {
	useDispatch as dispatchHook,
	useSelector as selectorHook,
} from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import debounce from 'lodash/debounce'

import { counterSlice } from './slices/counter-slice'

const saveToLocalStorage = (state: RootState) => {
	try {
		const counters = state.counters

		if (!counters.error) {
			const data = JSON.stringify({
				allApiCounters: counters.allApiCounters,
			})

			localStorage.setItem('localData', data)
		} else localStorage.removeItem('localData')
	} catch (e) {
		console.warn('Could not save state', e)
	}
}

const loadFromLocalStorage = () => {
	try {
		const appData = localStorage.getItem('localData')

		if (appData === null) return undefined

		const { savedData } = JSON.parse(appData)

		return savedData
	} catch (e) {
		console.warn('Could not load state', e)

		return undefined
	}
}

const preloadedState = loadFromLocalStorage()

const rootReducer = combineSlices(counterSlice)

export const store = configureStore({
	reducer: rootReducer,
	preloadedState,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

store.subscribe(
	debounce(() => {
		saveToLocalStorage(store.getState())
	}, 500)
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = dispatchHook
export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook
