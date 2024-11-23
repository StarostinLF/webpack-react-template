/* Пример реализации глобального хранилища для счетчика */

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICounter, ICounters } from '../../utils/interfaces/counter-interface'

import { checkResponse } from '../../utils/check-response'

/* API-запросы */

// Получение всех счётчиков
export const fetсhGetCounters = createAsyncThunk(
	'counter/fetсhGetCounters',
	async () => {
		const response = await fetch(`${process.env.API_LINK}/api/number-counter`)

		return checkResponse<ICounter[]>(response)
	}
)

// Получение одного конкретного счётчика по его id
export const fetсhGetCounter = createAsyncThunk(
	'counter/fetсhGetCounter',
	async (id: string) => {
		const response = await fetch(
			`${process.env.API_LINK}/api/number-counter/${id}`
		)

		return checkResponse<ICounter>(response)
	}
)

// Изменение счётчика по его id
export const fetсhSetCount = createAsyncThunk(
	'counter/fetсhSetCount',
	async ({ id, count }: ICounter) => {
		const response = await fetch(
			`${process.env.API_LINK}/api/number-counter/${id}`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify({ count: count }),
			}
		)

		return checkResponse<ICounter>(response)
	}
)

// Добавление конкретного счётчика по его id
export const fetсhAddNewCounter = createAsyncThunk(
	'counter/fetсhAddNewCounter',
	async ({ id, count }: ICounter) => {
		const response = await fetch(
			`${process.env.API_LINK}/api/number-counter/${id}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify({ count: count }),
			}
		)

		return checkResponse<ICounter[]>(response)
	}
)

// Удаление конкретного счётчика по его id
export const fetсhDeleteCounter = createAsyncThunk(
	'counter/fetсhDeleteCounter',
	async ({ id }: ICounter) => {
		const response = await fetch(
			`${process.env.API_LINK}/api/number-counter/${id}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
			}
		)

		return checkResponse<ICounter[]>(response)
	}
)

/* Слайс */

// Исходные данные для слайса
const initialState: ICounters = {
	allApiCounters: [],
	apiCounter: null,
	localCounter: 0,
	isLoading: false,
	isChanged: false,
	error: undefined,
}

// Сам слайс
export const counterSlice = createSlice({
	name: 'counters',
	initialState,
	reducers: {
		// Функции (экшены) работают НЕ напрямую через APi, а посредством взаимодлействия с локальными данными, полученными из API
		// функция (экшен) увеличения локального счетчика
		incrementCountAction: (state) => {
			state.localCounter += 1
		},
		// функция (экшен) увеличения локального счетчика
		decrementCountAction: (state) => {
			state.localCounter -= 1
		},
		// функция (экшен) увеличения локального счетчика (не из API)
		setCountAction: (state, action: PayloadAction<number>) => {
			state.localCounter = action.payload
		},
	},
	selectors: {
		// хранилище всех счетчиков из API
		allApiCountersSelector: (state) => state.allApiCounters,
		// храненилище одного счетчика из API
		apiCounterSelector: (state) => state.apiCounter,
		// хранилище локального счетчика (не из API)
		localCounterSelector: (state) => state.localCounter,
		// хранилище статуса обработки запроса
		isLoadingSelector: (state) => state.isLoading,
		// хранилище статуса изменения
		isChangedSelector: (state) => state.isChanged,
		// хранилище статуса ошибки
		errorSelector: (state) => state.error,
	},
	extraReducers: (builder) => {
		builder
			// Обработка запроса получения всех счётчиков (процесс загрузки, успешный ответ и ошибка запроса соответственно)
			.addCase(fetсhGetCounters.pending, (state) => {
				state.isLoading = true
			})
			.addCase(
				fetсhGetCounters.fulfilled,
				(state, action: PayloadAction<ICounter[]>) => {
					state.allApiCounters = action.payload
					state.isLoading = false
					state.error = initialState.error
				}
			)
			.addCase(fetсhGetCounters.rejected, (state, action) => {
				state.error = action.error.message
				state.isLoading = false
			})

			// Обработка запроса получения одного счётчика (процесс загрузки, успешный ответ и ошибка запроса соответственно)
			.addCase(fetсhGetCounter.pending, (state) => {
				state.isLoading = true
			})
			.addCase(
				fetсhGetCounter.fulfilled,
				(state, action: PayloadAction<ICounter>) => {
					state.apiCounter = action.payload
					state.isLoading = false
					state.error = initialState.error
				}
			)
			.addCase(fetсhGetCounter.rejected, (state, action) => {
				state.error = action.error.message
				state.isLoading = false
			})

			// Обработка запроса изменения счётчика (процесс загрузки, успешный ответ и ошибка запроса соответственно)
			.addCase(fetсhSetCount.pending, (state) => {
				state.isLoading = true
				state.isChanged = initialState.isChanged
			})
			.addCase(
				fetсhSetCount.fulfilled,
				(state, action: PayloadAction<ICounter>) => {
					state.apiCounter = action.payload
					state.isLoading = false
					state.isChanged = true
					state.error = initialState.error
				}
			)
			.addCase(fetсhSetCount.rejected, (state, action) => {
				state.isLoading = false
				state.isChanged = false
				state.error = action.error.message
			})
	},
})

export const counterActions = counterSlice.actions
export const counterSelectors = counterSlice.selectors
