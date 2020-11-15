import styled from 'styled-components'
import { mixins, theme } from '../../../style'

// icons
import InfoIcon from '@material-ui/icons/Info'
import { PrimaryButton } from '../../util/Buttons'

const { fontSizes, colors, mediaQueries } = theme

//root
const Root = styled.div``

//container
const Container = styled.div`
	${mixins.container}
`

const HeadDiv = styled.div`
	${mixins.grid};
	grid-template-columns: 1fr 2fr;
	height: auto;
	${mixins.py_3}

	@media (max-width: ${mediaQueries.tablet}px) {
		grid-template-columns: 1fr;
	}
`

const Heading = styled.h1`
	font-size: ${fontSizes.md};
`

const SubHeading = styled.h3`
	font-size: ${fontSizes.sm};
	font-weight: 400;
	margin: 7px 0;
`

const LinkHeading = styled.h1`
	font-size: ${fontSizes.sm};
	font-weight: 360;
`

const Paragraph = styled.p`
	font-size: ${fontSizes.xs};
	font-weight: 200;
`

const Nav = styled.nav`
	${mixins.flexCenter};
	align-items: flex-start;
	flex-direction: column;
	padding: 10px 0;
`

const LinkItem = styled.a`
	font-size: 17px;
	padding-bottom: 5px;
	margin-bottom: 5px;
	border-bottom: 1px solid #ccc;
	width: 100%;

	:hover {
		font-weight: 500;
	}
`

const Card = styled.div`
	${mixins.card};
	${mixins.p_2}

	:nth-child(1) {
		align-self: start;
		background-color: ${colors.gray};
	}
`

const Alert = styled.div`
	${mixins.alert}
	${mixins.alertSuccess}
`

const InformationIcon = styled(InfoIcon)`
	margin-bottom: -0.4rem;
	margin-right: 10px;
`

const UList = styled.ul`
	${mixins.py_1}
`

const Head = () => {
	return (
		<Root>
			<Container>
				<HeadDiv>
					<Card>
						<LinkHeading>Essentials</LinkHeading>
						<Nav>
							<LinkItem>Introduction</LinkItem>
							<LinkItem>About Leroku</LinkItem>
							<LinkItem>Installation</LinkItem>
						</Nav>

						<LinkHeading>Deployment</LinkHeading>
						<Nav>
							<LinkItem>Using the Cli</LinkItem>
							<LinkItem>Managing Resourses</LinkItem>
							<LinkItem>Upgrade & Downgrade</LinkItem>
						</Nav>
					</Card>
					<Card>
						<Heading>Introduction</Heading>
						<Paragraph>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et saepe
							eligendi libero non. Ratione perspiciatis vitae dolorem quis
							eveniet molestias adipisci, sunt reprehenderit molestiae omnis. A
							suscipit nam debitis deleniti.
						</Paragraph>
						<Alert>
							<InformationIcon />
							<span>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
								iste?
							</span>
						</Alert>
						<SubHeading>Lorem, ipsum dolor.</SubHeading>
						<Paragraph>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
							repellendus.
						</Paragraph>
						<PrimaryButton>Install Cli</PrimaryButton>

						<SubHeading>Requirements</SubHeading>
						<UList>
							<li>Windows 10, Mac OSX, Linux</li>
							<li>Node.js v12 or higher</li>
						</UList>

						<SubHeading>Install</SubHeading>
						<Paragraph>Mac (HomeBrew)</Paragraph>
						<pre>
							<code>$ brew install loruki-cli</code>
						</pre>
						<Paragraph>NPM</Paragraph>
						<pre>
							<code>$ npm install loruki-cli</code>
						</pre>
						<Paragraph>Yarn</Paragraph>
						<pre>
							<code>$ yarn install loruki-cli</code>
						</pre>
					</Card>
				</HeadDiv>
			</Container>
		</Root>
	)
}

export default Head
