import styles from './second-page.module.scss'

import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../services/store'
import {
	counterSelectors,
	fetсhGetCounter,
	fetсhSetCount,
} from '../../services/slices/counter-slice'
import { ICounter } from '../../utils/interfaces/counter-interface'

export default function SecondPage() {
	/* Стейты */
	const counter = useAppSelector<ICounter | null>(
		counterSelectors.apiCounterSelector
	)
	const isLoading = useAppSelector<boolean>(counterSelectors.isLoadingSelector)
	const isChanged = useAppSelector<boolean>(counterSelectors.isChangedSelector)
	const error = useAppSelector<string | undefined>(
		counterSelectors.errorSelector
	)
	const [formValue, setFormValue] = useState<ICounter>({
		id: '1',
		count: counter?.count || 0,
	})

	/* Хуки */
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(fetсhGetCounter('1'))
		setFormValue((prev) => ({
			...prev,
			count: counter?.count || 0,
		}))
	}, [counter?.count, dispatch])

	/* Константы */
	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault()

		try {
			dispatch(fetсhSetCount(formValue))
		} catch (error) {
			console.log(error)
		}
	}
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormValue((prev) => ({
			...prev,
			[e.target.name]: Number(e.target.value),
		}))
	}

	/* Разметка */
	return (
		<main className={`main ${styles.main}`}>
			<section className={'section'}>
				<h1 className={'section__title'}>Счётчик</h1>
				<form className={`form ${styles.form}`}>
					<fieldset className='fieldset'>
						<label htmlFor={'count'} className={''}>
							Введи значение счетчика и подтверди изменение
						</label>
						<input
							disabled={isLoading}
							name={'count'}
							type={'number'}
							value={formValue.count}
							onChange={handleChange}
							className={'input'}
						/>
						{error && <p className={'error-text'}>Ошибка изменения: {error}</p>}
						{isChanged && (
							<p className={'success-text'}>
								Счетчик успешно изменен! Можно перезагрузить страницу
							</p>
						)}
					</fieldset>
					<button
						disabled={isLoading}
						onClick={handleSubmit}
						className={'button counter__button'}
					>
						{isLoading ? 'Загрузка' : 'Сохранить'}
					</button>
				</form>
			</section>
		</main>
	)
}
