import styled from 'styled-components'
import { mixins, theme } from '../../../style'

//icons
import StorageIcon from '@material-ui/icons/Storage'
import ComputerIcon from '@material-ui/icons/Computer'
import PublishIcon from '@material-ui/icons/Publish'
import AccountTreeIcon from '@material-ui/icons/AccountTree'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import SettingsIcon from '@material-ui/icons/Settings'

//theme
const { fontSizes, mediaQueries } = theme

//root
const Root = styled.div``

const Container = styled.div`
	${mixins.container}
`

const MainGrid = styled.div`
	${mixins.grid};
	${mixins.grid_3};
	${mixins.my_4};
	height: auto;

	@media (max-width: ${mediaQueries.tablet}px) {
		grid-template-columns: 1fr;
		width: 100%;
	}
`

const Card = styled.div`
	${mixins.card};
	${mixins.flexCenter};
	:nth-child(1) {
		grid-column: 1 / span 3;
	}
	:nth-child(2) {
		grid-column: 1 / span 2;
		/* grid-row: 2 /span 3; */
	}

	@media (max-width: ${mediaQueries.tablet}px) {
		grid-column: 1;

		:nth-child(1) {
			grid-column: 1;
		}
		:nth-child(2) {
			grid-column: 1;
		}
	}
`
const Paragraph = styled.p`
	font-size: ${fontSizes.xs};
`

//styled components icons
const ServerIcon = styled(StorageIcon)`
	margin-right: 20px;
	font-size: 55px;
`
const CompIcon = styled(ComputerIcon)`
	margin-right: 20px;
	font-size: 55px;
`
const PubIcon = styled(PublishIcon)`
	margin-right: 20px;
	font-size: 55px;
`
const AccTreeIcon = styled(AccountTreeIcon)`
	margin-right: 20px;
	font-size: 55px;
`
const PowerIcon = styled(PowerSettingsNewIcon)`
	margin-right: 20px;
	font-size: 55px;
`
const SettIcon = styled(SettingsIcon)`
	margin-right: 20px;
	font-size: 55px;
`

const MainFeatures = () => {
	return (
		<Root>
			<Container>
				<MainGrid>
					{data.map(({ icon, desc }) => (
						<Card>
							{icon}
							<Paragraph>{desc}</Paragraph>
						</Card>
					))}
				</MainGrid>
			</Container>
		</Root>
	)
}

export default MainFeatures

const data = [
	{
		icon: <ServerIcon />,
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velsequi neque, qui eaque, labore quisquam vero repellendusnecessitatibus placeat eligendi laborum ipsa, explicaboconsectetur accusantium eos ipsam dolores quas velit.',
	},
	{
		icon: <CompIcon />,
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sequi neque, qui eaque. Velsequi neque, qui eaque.',
	},
	{
		icon: <AccTreeIcon />,
		desc: 'Lorem ipsum dolor sit amet, consectetur.',
	},
	{
		icon: <PowerIcon />,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
	},
	{
		icon: <SettIcon />,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
	},
	{
		icon: <PubIcon />,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
	},
]
