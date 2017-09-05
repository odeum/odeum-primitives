import React from 'react'
import { Heading, Image, Label, Link, Space, Text, View } from 'odeum-primitives'

const App = ({ name }) => {
	return (
		<div>
			<Heading>Hello World {name} </Heading>
			<Image image={require('./logotype.png')}/>
			<Label>This is a label</Label>
			<Link url="http://odeumcode.com">This is a link</Link>
			<Space>This is an area of space</Space>
			<Text>This is a paragraph of text for a {name} demo</Text>
			<View>This is a view</View>
		</div>
	)
}

export default App
