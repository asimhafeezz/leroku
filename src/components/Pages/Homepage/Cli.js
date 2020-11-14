import styled from 'styled-components'
import { mixins } from '../../../style'

const Root = styled.div`
	${mixins.my_4}
`

const Container = styled.div`
	${mixins.container};
	${mixins.grid};
	${mixins.grid_3};
	grid-template-rows: repeat(2, 1fr);
	height: 300px;

	//mobile media query
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		${mixins.py_2}
		grid-gap: 0;
		height: auto;
	}
`
const Image = styled.img`
	grid-column: 1 / span 2;
	grid-row: 1 / span 2;

	//mobile media query
	@media (max-width: 500px) {
		grid-column: 1;
		grid-row: 1;
	}
`

const Card = styled.div`
	${mixins.card}
	grid-gap: 5px;
`

const Heading = styled.h3`
	font-weight: 350;
`

const Cli = () => {
	return (
		<Root>
			<Container>
				<Image src='/cli.png' alt='cliimage' />
				<Card>
					<Heading>Easy to use, cross plateform CLI</Heading>
				</Card>
				<Card>
					<Heading>Deploy in seconds</Heading>
				</Card>
			</Container>
		</Root>
	)
}

export default Cli
