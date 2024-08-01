import { combineSlices, configureStore } from '@reduxjs/toolkit'
import {
	useDispatch as dispatchHook,
	useSelector as selectorHook,
} from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

const rootReducer = combineSlices(/* вставить слайсы */)

export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useDispatch: () => AppDispatch = dispatchHook
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook
