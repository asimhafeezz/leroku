import styled from 'styled-components'
import { mixins, theme } from '../../style'
//icons
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

//theme
const { colors } = theme



//root
const Root = styled.div`
background-color: ${colors.darkBlueBg};
color: ${colors.white};
`
const Container = styled.div`
${mixins.container}
${mixins.grid}
${mixins.grid_3}
height: 270px;

//mobile media query
@media (max-width: 580px){
		grid-template-columns: 1fr;
	}
`

const Icons = styled.div`
${mixins.flexCenter};
justify-content: flex-start;
gap: 10px;
margin-top: -3rem;

//mobile media query
@media (max-width: 580px){
    margin-top: 0;
	}
`

const Nav = styled.div`
display: flex;
flex-direction: column;

//mobile media query
@media (max-width: 580px){
    justify-content: center;
	}
`
const Link = styled.a`
`

const Footer = () => {
return(
    <Root>
        <Container>
        <div>
        <h1>Leroku.</h1>
        <p>Copyright &copy; 2020</p>
        </div>
        <Nav>
            <Link>Home</Link>
            <Link>Features</Link>
            <Link>Docs</Link>
        </Nav>
        <Icons>
        <GitHubIcon />
        <TwitterIcon />
        <FacebookIcon />
        <InstagramIcon />
        </Icons>
        </Container>
    </Root>
    )
}

export default Footer