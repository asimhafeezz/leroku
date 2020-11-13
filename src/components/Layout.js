import { GlobalStyle } from '../style/index'
import NavbarHeader from './Navbar'

const Layout = ({ children }) => {
	return (
		<div>
			<GlobalStyle />
			<NavbarHeader />
			<main>{children}</main>
		</div>
	)
}

export default Layout
