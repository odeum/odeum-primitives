import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledImage } from './ImageStyles'

class Image extends Component {
	render() {
		return (
			<div>
				<StyledImage>{this.props.children}</StyledImage>
			</div>
		)
	}
}

Image.propTypes = {
	xxx: PropTypes.string,
	yyy: PropTypes.string,
	zzz: PropTypes.string
}

Image.defaultProps = {
	xxx: '',
	yyy: '',
	zzz: ''
}


export default Image