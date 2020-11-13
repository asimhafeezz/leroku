import { GlobalStyle } from '../style/index'
import NavbarHeader from './Navbar'

const Layout = ({ children }) => {
	return (
		<div>
			<GlobalStyle />
			<main>{children}</main>
            <NavbarHeader />
		</div>
	)
}

export default Layout
