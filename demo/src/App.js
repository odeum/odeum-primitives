import React from 'react'
import { Heading, Text } from 'odeum-primitives'

const App = ({ name }) => {
	return (
		<div>
			<Heading>Hello World {name} </Heading>
			<Text>This is a paragraph of text</Text>
		</div>
	)
}

export default App
