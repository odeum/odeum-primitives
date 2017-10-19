import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledLink } from './LinkStyles'

class Link extends Component {
	render() {
		const { url, children } = this.props
		return (
			<div>
				<StyledLink href={url}>{children}</StyledLink>
			</div>
		)
	}
}

Link.propTypes = {
	url: PropTypes.string,
	yyy: PropTypes.string,
	zzz: PropTypes.string
}

Link.defaultProps = {
	url: '',
	yyy: '',
	zzz: ''
}


export default Link