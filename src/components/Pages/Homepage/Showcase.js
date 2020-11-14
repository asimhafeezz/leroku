import styled from 'styled-components'
import { mixins, theme } from '../../../style'
import { LinkButton, PrimaryButton } from '../../util/Buttons'
const { colors } = theme

//root
const Root = styled.div`
	background-color: ${colors.blueBg};
	height: 400px;
	position: relative;

	::after,
	::before {
		content: '';
		position: absolute;
		height: 100px;
		bottom: -70px;
		right: 0;
		left: 0;
		background-color: white;
		transform: skewY(-3deg);
		-webkit-transform: skewY(-3deg);
		-moz-transform: skewY(-3deg);
		-ms-transform: skewY(-3deg);
	}
`

const Container = styled.div`
	${mixins.container}
	${mixins.grid}
    grid-template-columns: 1fr 1fr;
	grid-gap: 30px;
	overflow: visible;

    //mobile media query
	@media (max-width: 768px){
		grid-template-columns: 1fr;
        grid-gap: 0;
		${mixins.textCenter}
		padding-top: 4rem;
	}
`
//texts
const Texts = styled.div`
	h1,
	p {
		color: ${colors.white};
	}
`
const Heading = styled.h1`
	font-size: 40px;
`
const Paragraph = styled.p`
	margin: 20px 0;
`

//formcard
const FormCard = styled.div`
	${mixins.card};
    padding: 40px;

	position: relative;
	top: 60px;
	height: 350px;
	width: 400px;
	z-index: 100;
	justify-self: flex-end;

	//mobile media query
	@media (max-width: 768px){
		justify-self: center;

	}
`
const FormHeading = styled.h2`
	font-size: 27px;
	font-weight: 350;
`
const FormControl = styled.div`
	margin: 25px 0;
	input[type='text'] {
		border: 0;
		border-bottom: 1px solid #b4becb;
		width: 100%;
		padding: 3px;
		font-size: 16px;
	}
`

const Showcase = () => {
	return (
		<Root>
			<Container>
				<Texts>
					<Heading>Easier Deployment</Heading>
					<Paragraph>
						Deploy web apps of all kinds, from large scale enterprise APIs to
						static websites for individuals.Fill out the form to try a demo of
						our plateform
					</Paragraph>
					<LinkButton>Read More</LinkButton>
				</Texts>

				<FormCard>
					<FormHeading>Request a Demo</FormHeading>
					<form>
						<FormControl>
							<input type='text' placeholder='Name' />
						</FormControl>
						<FormControl>
							<input type='text' placeholder='Company Name' />
						</FormControl>
						<FormControl>
							<input type='text' placeholder='Email' />
						</FormControl>
						<PrimaryButton>Send</PrimaryButton>
					</form>
				</FormCard>
			</Container>
		</Root>
	)
}

export default Showcase
