import styled from 'styled-components'
import { mixins, theme } from '../../../style'
const { fontSizes } = theme

//root
const Root = styled.div`
	/* ${mixins.py_4}; */
`

const Heading = styled.h2`
	${mixins.textCenter}
	${mixins.my_2};
	font-size: ${fontSizes.md};
`
const Card = styled.div`
	${mixins.card};
	height: 170px;
	width: 130px;
    transition: ${mixins.transition};
	${mixins.textCenter};
    :hover{
        transform: translateY(-10px) 
    }
`

const Container = styled.div`
	${mixins.container}
    ${mixins.p_1}
`
const Flex = styled.div`
	${mixins.flexCenter};
    ${mixins.py_1}
    flex-wrap: wrap;
`

const Languages = () => {
	return (
		<Root>
			<Container>
				<Heading>Supported Languages</Heading>
				<Flex>
					{cards.map(({ name, img } , i) => (
						<Card key={i}>
							<h4>{name}</h4>
							<img src={img} alt='nodeImage' />
						</Card>
					))}
				</Flex>
			</Container>
		</Root>
	)
}

export default Languages

//languages data
const cards = [
	{
		name: 'Node.js',
		img: '/logos/node.png',
	},
	{
		name: 'Python',
		img: '/logos/python.png',
	},
	{
		name: 'Clojure',
		img: '/logos/clojure.png',
	},
	{
		name: 'Csharp',
		img: '/logos/csharp.png',
	},
	{
		name: 'Go',
		img: '/logos/go.png',
	},
	{
		name: 'Ruby',
		img: '/logos/ruby.png',
	},
	{
		name: 'Scala',
		img: '/logos/scala.png',
	},
]
