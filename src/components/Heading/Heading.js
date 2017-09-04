import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledHeading1/* , StyledHeading2, StyledHeading3, StyledHeading4, StyledHeading5, StyledHeading6 */ } from './StyledHeading'

class Heading extends Component {
	render() {
		return (
			<div>
				<StyledHeading1>{this.props.children}</StyledHeading1>
				{/* <StyledHeading2>{this.props.children}</StyledHeading2>
				<StyledHeading3>{this.props.children}</StyledHeading3>
				<StyledHeading4>{this.props.children}</StyledHeading4>
				<StyledHeading5>{this.props.children}</StyledHeading5>
				<StyledHeading6>{this.props.children}</StyledHeading6> */}
			</div>
		)
	}
}

Heading.propTypes = {
	xxx: PropTypes.string,
	yyy: PropTypes.string,
	zzz: PropTypes.string
}

Heading.defaultProps = {
	xxx: '',
	yyy: '',
	zzz: ''
}


export default Heading
