import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledText } from './StyledText'

class Text extends Component {
	render() {
		return (
			<div>
				<StyledText>{this.props.children}</StyledText>
			</div>
		)
	}
}

Text.propTypes = {
	xxx: PropTypes.string,
	yyy: PropTypes.string,
	zzz: PropTypes.string
}

Text.defaultProps = {
	xxx: '',
	yyy: '',
	zzz: ''
}


export default Text