import styled from 'styled-components'
import { mixins } from '../../../style'

//root
const Root = styled.div`
${mixins.flexCenter}
height: 500px;
`

const AboutPage = () => {
return(
    <Root>
        <h1>About Page</h1>
    </Root>
    )
}

export default AboutPage