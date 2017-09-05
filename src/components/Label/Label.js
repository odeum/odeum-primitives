import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledLabel } from './LabelStyles'

class Label extends Component {
	render() {
		return (
			<div>
				<StyledLabel>{this.props.children}</StyledLabel>
			</div>
		)
	}
}

Label.propTypes = {
	xxx: PropTypes.string,
	yyy: PropTypes.string,
	zzz: PropTypes.string
}

Label.defaultProps = {
	xxx: '',
	yyy: '',
	zzz: ''
}


export default Label