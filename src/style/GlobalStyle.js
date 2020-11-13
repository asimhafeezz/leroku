import { createGlobalStyle } from 'styled-components'
import theme from './theme'
const { colors } = theme

const GlobalStyle = createGlobalStyle`
html{
    box-sizing: border-box;
    width: 100%;
}

*,
*::after,
*::before{
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    outline: none;
}

body{
    color: ${colors.text};
    line-height: 1.6;
}

ul{
    list-style-type: none;
}

a{
    text-decoration: none;
    cursor: pointer;
}

h1,
h2{
    font-weight: 300;
    line-height: 1.2;
    margin: 10px 0;
}

p{
    margin: 10px 0;
}

img{
    width: 100%;
}

`

export default GlobalStyle
