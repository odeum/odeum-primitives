import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledImage } from './ImageStyles'

class Image extends Component {
	render() {
		const { image, alt } = this.props
		return (
			<div>
				<StyledImage src={image} alt={alt} />
			</div>
		)
	}
}

Image.propTypes = {
	image: PropTypes.string,
	alt: PropTypes.string
}

Image.defaultProps = {
	image: '',
	alt: ''
}


export default Image

