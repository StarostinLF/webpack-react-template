export const checkResponse = async <T>(result: Response): Promise<T> => {
	if (result.ok) {
		const text = await result.text()

		if (!text) return {} as unknown as T

		try {
			const data = JSON.parse(text)

			if (Object.keys(data).length === 0) return {} as unknown as T

			return data
		} catch (error) {
			return Promise.reject('Ошибка парсинга JSON')
		}
	}

	return Promise.reject(`Ошибка: ${result.status}`)
}
