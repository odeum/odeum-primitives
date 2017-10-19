import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledHeading } from './HeadingStyles'

class Heading extends Component {
	render() {
		// const { ...styles } = this.props // (...styles rest operator passes down all props)
		return (
			<div>
				<StyledHeading {...this.props}>{this.props.children}</StyledHeading>
			</div>
		)
	}
}

Heading.propTypes = {
	size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
	weight: PropTypes.oneOf([300, 400, 600, 700, 900]),
	color: PropTypes.string
}

Heading.defaultProps = {
	size: 1,
	weight: 900
}


export default Heading
