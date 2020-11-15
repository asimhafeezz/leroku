import styled from 'styled-components'
import { mixins, theme } from '../../../style'
import Head from './Head'
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
    </Root>
    )
}

export default FeaturesPage