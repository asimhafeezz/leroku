//use history
import { useHistory } from 'react-router-dom'

//styled components
import styled from 'styled-components'
import { theme, mixins } from '../../style'
const { colors } = theme

const Navbar = styled.div`
	background-color: ${colors.blueBg};
	color: ${colors.white};
`

const Nav = styled.nav``

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

	//mobile media query
	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const LogoSection = styled.section`
	flex: 1;
	height: 100px;
`
const Logo = styled.img`
	width: 100px;
	margin-top: 1.5rem;
	margin-bottom: 0.3rem;
`

const UList = styled.ul`
	display: inline-block;
	height: 30px;
	//mobile media query
	@media (max-width: 768px) {
		height: 50px;
		background-color: ${colors.darkBlueBg};
		padding: 11px 0;
		border-radius: 5px;
	}
`

const NavbarHeader = () => {
	//history routing
	const { push } = useHistory()
	return (
		<Navbar>
			<NavContainer>
				<LogoSection>
					<Logo src='/lerokuLogo.png' alt='lerokulogo' />
				</LogoSection>

				<Nav>
					<UList>
						<Item onClick={() => push('/home')}>Home</Item>
						<Item onClick={() => push('/features')}>Features</Item>
						<Item onClick={() => push('/docs')}>Docs</Item>
					</UList>
				</Nav>
			</NavContainer>
		</Navbar>
	)
}

export default NavbarHeader
