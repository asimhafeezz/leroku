import styled from 'styled-components'
import Head from './Head'
import MainFeatures from './MainFeatures'
import SubHead from './SubHead'

//root
const Root = styled.div`

`

const FeaturesPage = () => {
return(
    <Root>
        <Head />
        <SubHead />
        <MainFeatures />
    </Root>
    )
}

export default FeaturesPage