export interface ICounter {
	id: string
	count: number
}

export interface ICounters {
	allApiCounters: ICounter[]
	apiCounter: ICounter | null
	localCounter: number
	isLoading: boolean
	isChanged: boolean
	error: string | undefined
}
