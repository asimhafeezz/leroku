import styled from 'styled-components'
import { mixins, theme } from '../../../style'
import { LinkButton } from '../../util/Buttons'
const { colors , fontSizes} = theme

const Root = styled.div`
	background-color: ${colors.blueBg};
	${mixins.my_2}
	${mixins.py_1};
	color: ${colors.white};
`

const Container = styled.div`
	${mixins.container};
	${mixins.grid};
	grid-template-columns: 4fr 3fr;
    //mobile media query
@media (max-width: 580px){
		grid-template-columns: 1fr;
        height: auto;
	}
`
const Texts = styled.div`
	${mixins.textCenter}
`
const Heading = styled.h2`
font-size: ${fontSizes.md}
`

const Paragraph = styled.p`
	${mixins.my_1}
    font-size: ${fontSizes.sm}
`

const DarkLinkButton = styled(LinkButton)`
	background-color: ${colors.darkBlueBg};
	border: 0;
`

const Cloud = () => {
	return (
		<Root>
			<Container>
				<Texts>
					<Heading>Extreme Cloud Hosting</Heading>
					<Paragraph>
						Cloud hosting like you've never seen. Fast, efficient and Scaleable
					</Paragraph>
					<DarkLinkButton>Read More</DarkLinkButton>
				</Texts>
				<img src='/cloud.png' alt='cloudimage' />
			</Container>
		</Root>
	)
}

export default Cloud
