import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledLink } from './LinkStyles'

class Link extends Component {
	render() {
		return (
			<div>
				<StyledLink src={this.props.src}>{this.props.children}</StyledLink>
			</div>
		)
	}
}

Link.propTypes = {
	xxx: PropTypes.string,
	yyy: PropTypes.string,
	zzz: PropTypes.string
}

Link.defaultProps = {
	xxx: '',
	yyy: '',
	zzz: ''
}


export default Link