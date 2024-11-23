import styles from './main-page.module.scss'

import { useAppDispatch, useAppSelector } from '../../services/store'
import {
	counterActions,
	counterSelectors,
} from '../../services/slices/counter-slice'

export default function MainPage() {
	/* Стейты */
	const localCounter = useAppSelector<number>(
		counterSelectors.localCounterSelector
	)

	/* Хуки */
	const dispatch = useAppDispatch()

	/* Константы */
	const handleIncrement = () => dispatch(counterActions.incrementCountAction())
	const handleDecrement = () => dispatch(counterActions.decrementCountAction())

	/* Разметка */
	return (
		<main className={`main ${styles.main}`}>
			<section className={'section'}>
				<h1 className={'section__title'}>Счётчик</h1>
				<div className={'counter'}>
					<button
						onClick={handleDecrement}
						className={'button counter__button'}
					>
						-
					</button>
					<p className={'counter__'}>{localCounter}</p>
					<button
						onClick={handleIncrement}
						className={'button counter__button'}
					>
						+
					</button>
				</div>
			</section>
		</main>
	)
}
