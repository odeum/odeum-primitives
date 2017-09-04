import React, { Component } from 'react'
import PropTypes from 'prop-types'

class View extends Component {
	render() {
		return (
			<div>
				
			</div>
		)
	}
}

View.propTypes = {
	xxx: PropTypes.string,
	yyy: PropTypes.string,
	zzz: PropTypes.string
}

View.defaultProps = {
	xxx: '',
	yyy: '',
	zzz: ''
}


export default View