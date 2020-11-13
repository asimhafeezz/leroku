import { css } from 'styled-components'
import theme from './theme'
const { colors } = theme

const mixins = {
	container: css`
		max-width: 1100px;
		margin: 0 auto;
		overflow: auto;
		padding: 0 40px;
	`,
	flexBetween: css`
		display: flex;
		justify-content: space-between;
		align-items: center;
	`,
	flexCenter: css`
		display: flex;
		justify-content: space-between;
		align-items: center;
	`,
	grid: css`
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 20px;
		justify-content: center;
		align-items: center;
		height: 400px;
	`,
	card: css`
		background-color: ${colors.white};
		border-radius: 10px;
		box-shadow: 0 3px 30px rgba(0, 0, 0, 0.2);
		padding: 40px;
		margin: 10px;
    `,
    button: css`
    display: inline-block;
    padding: 10px 30px;
    background-color: ${colors.blueBg};
    border-radius:5px;
    color: ${colors.white};
    border: none;
    cursor: pointer;
    :hover, :focus{
        background-color: ${colors.darkBlueBg};
    }
    `,
	transition: `all 0.25s ease`,
}

export default mixins
