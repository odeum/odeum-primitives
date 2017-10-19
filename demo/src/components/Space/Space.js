import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledSpace } from './SpaceStyles'

class Space extends Component {
	render() {
		return (
			<div>
				<StyledSpace>{this.props.children}</StyledSpace>
			</div>
		)
	}
}

Space.propTypes = {
	xxx: PropTypes.string,
	yyy: PropTypes.string,
	zzz: PropTypes.string
}

Space.defaultProps = {
	xxx: '',
	yyy: '',
	zzz: ''
}


export default Space