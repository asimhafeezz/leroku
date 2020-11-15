import styled from 'styled-components'
import { mixins, theme } from '../../../style'
import Head from './Head'
import MainFeatures from './MainFeatures'
import SubHead from './SubHead'

//theme
const { colors } = theme

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