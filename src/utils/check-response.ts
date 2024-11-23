const createEmptyResponse = <T extends object>(): T => {
	return {} as unknown as T
}

export const checkResponse = async <T extends object>(
	result: Response
): Promise<T> => {
	if (result.ok) {
		const text = await result.text()

		if (!text) return createEmptyResponse<T>()

		try {
			const data = JSON.parse(text) as T

			if (Object.keys(data).length === 0) return createEmptyResponse<T>()

			return data
		} catch {
			return Promise.reject(new Error('Ошибка парсинга JSON'))
		}
	}

	return Promise.reject(new Error(`Ошибка: ${result.status}`))
}
