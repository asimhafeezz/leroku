import styled from 'styled-components'
import { mixins } from '../style'

//icons
import StorageIcon from '@material-ui/icons/Storage';
import PublishIcon from '@material-ui/icons/Publish';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

//root
const Root = styled.div`
${mixins.my_3}
`

const Container = styled.div`
	${mixins.container};
    padding-top: 90px;
`

const Heading = styled.h3`
	${mixins.textCenter};
    font-weight: 350;
`

//icons
const Icons = styled.div`
${mixins.grid};
${mixins.grid_3};
${mixins.textCenter};
height: 250px;
`

const UploadIcon = styled(PublishIcon)`
font-size: 50px;
`
const ServerIcon = styled(StorageIcon)`
font-size: 50px;
`
const ProjectIcon = styled(AccountTreeIcon)`
font-size: 50px;
`
const IconHeadding = styled.h2`
font-weight: 350;
`
const IconText = styled.p``



const Stats = () => {
	return (
		<Root>
			<Container>
				<Heading>
					Welcome to the best plateform for building applications of all types
					with modren architecture and scalling
				</Heading>
                <Icons>
                    <div>
                        <ServerIcon />
                        <IconHeadding>10,349,405</IconHeadding>
                        <IconText>Deployment</IconText>
                    </div>
                    <div>
                        <UploadIcon />
                        <IconHeadding>10,349,405</IconHeadding>
                        <IconText>Pulished</IconText>
                    </div>
                    <div>
                        <ProjectIcon />
                        <IconHeadding>10,349,405</IconHeadding>
                        <IconText>Projects</IconText>
                    </div>
                </Icons>
			</Container>
		</Root>
	)
}

export default Stats
