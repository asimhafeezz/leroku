import styled from 'styled-components'
import { theme } from '../style/index'
const { colors } = theme

const Navbar = styled.div`
	background-color: ${colors.navbarBg};
	color: ${colors.white};
	/* height: 70px; */
`

const Nav = styled.nav`
align-self: center;
`

const Item = styled.a`
padding: 10px;
margin: 0 5px;
cursor: pointer;
:hover{
    border-bottom: 2px ${colors.white} solid; 
}
`

const NavContainer = styled.div`
max-width: 1100px;
margin: 0 auto;
overflow: auto;
padding: 0 40px;

display: flex;
justify-content: 'space-between'

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
