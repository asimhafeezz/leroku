import styled from 'styled-components'
import { mixins , theme} from '../../../style'
const { fontSizes , colors } = theme
//root
const Root = styled.div`
`

//container
const Container = styled.div`
${mixins.container}
`

const ShowcaseDiv = styled.div`
${mixins.grid};
`

const Heading = styled.h1`
font-size: ${fontSizes.md};
`

const Paragraph = styled.p`
font-size: ${fontSizes.xs};
font-weight: 200;
`

const Image = styled.img`
width: 300px;
justify-self: right;
`

const Showcase = () => {
return(
    <Root>
        <Container>
            <ShowcaseDiv>
                <div>
                    <Heading>The Leroku Plateform</Heading>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eos odit quam natus deleniti dicta iusto neque, reiciendis placeat aliquid reprehenderit ab quisquam tenetur veritatis numquam est, velit ad beatae!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Paragraph>
                </div>
                <Image src="/server2.png" alt="serverImage" />
            </ShowcaseDiv>
        </Container>
    </Root>
    )
}

export default Showcase