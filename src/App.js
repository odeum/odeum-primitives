import React, { Component } from 'react'
import Heading from 'components/Heading/Heading'
import { StyledHeading3 } from 'components/Heading/StyledHeading'

class App extends Component {
	render() {
		return (
			<div>
				{/* <Heading>Hello World</Heading> */}
				<Heading><StyledHeading3>Hello World</StyledHeading3></Heading>
			</div>
		)
	}
}

export default App
