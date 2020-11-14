import { GlobalStyle } from '../../style'
import NavbarHeader from './Navbar'
import NavbarFooter from './Footer'

const Layout = ({ children }) => {
	return (
		<div>
			<GlobalStyle />
			<NavbarHeader />
			<main>{children}</main>
			<NavbarFooter />
		</div>
	)
}

export default Layout
