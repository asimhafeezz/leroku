import styled from 'styled-components'
import { mixins } from '../../../style'

//root
const Root = styled.div``

const Container = styled.div`
${mixins.container}
`

const MainGrid = styled.div`
${mixins.grid};
grid-template-rows: repeat(3, 1fr);
`

const MainFeatures = () => {
return(
    <Root>
        <Container>
            <MainGrid>
                
            </MainGrid>
        </Container>
    </Root>
    )
}

export default MainFeatures