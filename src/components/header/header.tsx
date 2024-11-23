import { Link, NavLink } from 'react-router'
import clsx from 'clsx'

import { ReactComponent as Logo } from '../../assets/images/logo.svg'

export default function Header() {
	/* Разметка */
	return (
		<header className={'header'}>
			<nav className={'navigation container'}>
				<Link to={'/'} className={'navigation__logo'}>
					<Logo className='logo' />
					Webpack + React-SPA + TS
				</Link>
				<ul className={'navigation__menu'}>
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
				<div className={`navigation__container`}>
					Текст
					<button className={'button'}>Кнопка</button>
				</div>
			</nav>
		</header>
	)
}
