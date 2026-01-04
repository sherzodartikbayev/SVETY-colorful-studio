import Button from '../ui/button'

const Navbar = () => {
	return (
		<header>
			<div className='container'>
				<h1 className='section-title'>Section title</h1>

				<Button variant='primary'>See more</Button>
				<Button variant='secondary'>See more</Button>
				<Button variant='outline'>See more</Button>
			</div>
		</header>
	)
}

export default Navbar
