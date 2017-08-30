import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Space extends Component {
	render() {
		return (
			<div>
				
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