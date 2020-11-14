import styled from 'styled-components'
import { mixins } from '../../../style'

//root
const Root = styled.div`
${mixins.flexCenter}
height: 500px;
`

const FeaturesPage = () => {
return(
    <Root>
        <h1>Features Page</h1>
    </Root>
    )
}

export default FeaturesPage