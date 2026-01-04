import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/main-layout'
import Home from './pages/home'
import ErrorPage from './pages/error'

const App = () => {
	const routes = createBrowserRouter([
		{
			path: '/',
			element: <MainLayout />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <Home />,
				},
			],
		},
	])

	return <RouterProvider router={routes} />
}

export default App
