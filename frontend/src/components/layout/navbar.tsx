import { NavLink } from 'react-router-dom'
import Button from '../ui/button'
import { navbarLinks } from '../../constants'

const Navbar = () => {
	return (
		<header>
			<div className=''>
				{/* Top */}
				<div className='max-w-[1920px] mx-auto h-10 flex-between px-[120px] bg-blue'>
					<div className='flex-center gap-[60px]'>
						<a href='#' className='top-nav-link flex-center gap-1'>
							<img src='/icons/location.svg' alt='location' />
							Белгород, Щорса 51
						</a>
						<a href='#' className='top-nav-link flex-center gap-1'>
							<img src='/icons/phone.svg' alt='phone' />
							+7 (999) 999 99-99
						</a>
					</div>

					<div className='flex-center gap-8 top-nav-link'>
						<a href='#'>О магазине</a>
						<a href='#'>Доставка и оплата</a>
						<a href='#'>Вопрос-ответ</a>
						<a href='#'>Контакты</a>
					</div>
				</div>

				{/* Main */}
				<div className='container h-20 flex-center gap-9'>
					{/* Logo */}
					<NavLink to={'/'} className=''>
						<img src='/logo.svg' alt='CVETY' className='w-80 object-cover' />
					</NavLink>

					{/* Catalog */}
					<Button variant='secondary' className='flex-center gap-2 px-7'>
						<img src='/icons/catalog.svg' alt='catalog' />
						Katalog
					</Button>

					<div className='relative max-w-[989px] w-full bg-blue border-blue border-[2px] rounded-10'>
						<input
							type='text'
							className='p-3 w-11/12 outline-none border-none rounded-10'
							placeholder='Поиск'
						/>
						<button className='absolute top-[17.21px] right-[17.21px]'>
							<img src='/icons/search.svg' alt='search' />
						</button>
					</div>

					<div className='flex-center gap-[30px]'>
						{navbarLinks.map(nav => (
							<NavLink
								to={nav.route}
								className='flex flex-col items-center gap-1'
							>
								<img src={nav.img} alt={nav.label} width={30} height={30} />
								<p className='font-medium text-sm leading-[125%]'>
									{nav.label}
								</p>
							</NavLink>
						))}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Navbar
