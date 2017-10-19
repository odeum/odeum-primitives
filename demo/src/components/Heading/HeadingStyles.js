import styled from 'styled-components'

export const StyledHeading = styled.h`
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
	font-size: ${({ size }) => sizes[size].fontSize};
	font-weight: ${({ weight }) => weight};
	font-style: normal; 
	color: ${({ color }) => color};
`

export const sizes = {
	'1': {
		fontSize: '40px',
	},
	'2': {
		fontSize: '25px',
	},
	'3': {
		fontSize: '20px',
	},
	'4': {
		fontSize: '18px',
	},
	'5': {
		fontSize: '15px',
	},
	'6': {
		fontSize: '12px',
	}
}
