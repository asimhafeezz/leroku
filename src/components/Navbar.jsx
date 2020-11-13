import styled from 'styled-components'
import { theme, mixins } from '../style/index'
const { colors } = theme

const Navbar = styled.div`
	background-color: ${colors.blueBg};
	color: ${colors.white};
	/* height: 70px; */
`

const Nav = styled.nav`
	align-self: center;
`

const Item = styled.a`
	padding: 10px;
	margin: 0 5px;
	:hover {
		border-bottom: 2px ${colors.white} solid;
	}
`

const NavContainer = styled.div`
	${mixins.container};
	${mixins.flexBetween}
`

const Logo = styled.h1`
	flex: 1;
`

const NavbarHeader = () => {
	return (
		<Navbar>
			<NavContainer>
				<Logo>Leroku.</Logo>
				<Nav>
					<Item>Home</Item>
					<Item>Features</Item>
					<Item>Docs</Item>
				</Nav>
			</NavContainer>
		</Navbar>
	)
}

export default NavbarHeader
