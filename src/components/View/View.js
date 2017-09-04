import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledView } from './StyledView'

class View extends Component {
	render() {
		return (
			<div>
				<StyledView>{this.props.children}</StyledView>
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