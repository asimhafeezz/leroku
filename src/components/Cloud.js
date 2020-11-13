import styled from 'styled-components'
import { mixins, theme } from '../style'
import { LinkButton } from './util/Buttons'
const { colors } = theme

const Root = styled.div`
background-color: ${colors.blueBg};
${mixins.my_2}
${mixins.py_2}
`

const Container = styled.div`
${mixins.container}
`
const Texts = styled.div`
${mixins.textCenter}
`
const Heading = styled.h2``
const Paragraph = styled.p`
`

const Cloud = () => {
    return (
        <Root>
            <Container>
                <Texts>
                    <Heading></Heading>
                    <Paragraph>Cloud hosting like you've never seen. Fast, efficient and Scaleable</Paragraph>
                    <LinkButton>Read More</LinkButton>
                </Texts>
            </Container>
        </Root>
    )
}

export default Cloud
