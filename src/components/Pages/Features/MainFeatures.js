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
const { fontSizes } = theme

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
`

const Card = styled.div`
	${mixins.card};
	${mixins.flexCenter};
    :nth-child(1){
        grid-column: 1 / span 3;
    }
    :nth-child(2){
        grid-column: 1 / span 2;
        /* grid-row: 2 /span 3; */
    }
`
const Paragraph = styled.p`
font-size: ${fontSizes.xs}
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
					<Card>
						<ServerIcon />
						<Paragraph>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
							sequi neque, qui eaque, labore quisquam vero repellendus
							necessitatibus placeat eligendi laborum ipsa, explicabo
							consectetur accusantium eos ipsam dolores quas velit.
						</Paragraph>
					</Card>
					<Card>
						<CompIcon />
						<Paragraph>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
							sequi neque, qui eaque. Vel
							sequi neque, qui eaque.
						</Paragraph>
					</Card>
					<Card>
						<AccTreeIcon />
						<Paragraph>
							Lorem ipsum dolor sit amet, consectetur.
						</Paragraph>
					</Card>
					<Card>
						<PowerIcon />
						<Paragraph>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</Paragraph>
					</Card>
					<Card>
						<SettIcon />
						<Paragraph>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</Paragraph>
					</Card>
					<Card>
						<PubIcon />
						<Paragraph>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</Paragraph>
					</Card>
				</MainGrid>
			</Container>
		</Root>
	)
}

export default MainFeatures
