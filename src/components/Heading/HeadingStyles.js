import styled from 'styled-components'

export const StyledHeading = styled.h1`
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
		fontSize: '35px',
	},
	'3': {
		fontSize: '28px',
	},
	'4': {
		fontSize: '22px',
	},
	'5': {
		fontSize: '18px',
	},
	'6': {
		fontSize: '15px',
	}
}

/* 

	font-size: ${(props) => props.size ? props.size : props.fixedSize ? sizes[props.fixedSize].fontSize : props.hasIcon ? '0 0 0 10px' : '0 0 0 15px'};
	font-weight: ${({ size }) => sizes[size].height};


*/