import styles from './footer.module.scss'

import { Link, NavLink } from 'react-router'
import clsx from 'clsx'

import { ReactComponent as Logo } from '../../assets/images/logo.svg'

export default function Footer() {
	/* Разметка */
	return (
		<footer className={'footer'}>
			<nav className={`navigation container ${styles.navigation}`}>
				<Link to={'/'}>
					<Logo className='logo' />
				</Link>
				<ul className={`navigation__menu ${styles.navigationMenu}`}>
					<li className={'navigation__menu-item'}>
						<NavLink
							to={'/'}
							className={({ isActive }) =>
								clsx(
									'link',
									'navigation__link',
									isActive ? 'navigation__link_active' : ''
								)
							}
						>
							Главная
						</NavLink>
					</li>
					<li className={'navigation__menu-item'}>
						<NavLink
							to={'/page-2'}
							className={({ isActive }) =>
								clsx(
									'link',
									'navigation__link',
									isActive ? 'navigation__link_active' : ''
								)
							}
						>
							Страница 2
						</NavLink>
					</li>
				</ul>
			</nav>
		</footer>
	)
}
