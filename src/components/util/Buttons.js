import styled from 'styled-components'
import { mixins ,theme } from '../../style'
const { colors } = theme

const Button = styled.button`
${mixins.button}
`

const Link = styled.button`
${mixins.button}
background-color: inherit;
border: 1px solid ${colors.white};
:hover, :focus{
    background-color: inherit;
}

`

const PrimaryButton = ({ children }) => {
	return <Button>{children}</Button>
}

const LinkButton = ({ children }) => {
	return <Link>{children}</Link>
}

export {PrimaryButton , LinkButton}
