import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Label extends Component {
	render() {
		return (
			<div>
				
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