import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Text extends Component {
	render() {
		return (
			<div>
				
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