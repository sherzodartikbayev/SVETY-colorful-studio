import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/footer'
import Navbar from '../components/layout/navbar'

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default MainLayout
