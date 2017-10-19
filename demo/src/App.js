import React from 'react'
import { Heading, Image, Label, Link, Space, Text, View } from './index'

const styles = {
	size: 1,
	weight: 600,
	color: 'magenta'
}

const App = ({ name }) => {
	return (
		<div>
			<Image image={require('./logotype.png')} alt="ODEUM Code logotype"/>
			<Heading>Hello World {name} </Heading>
			<Label>This is an {name} label</Label>
			<Link url="http://odeumcode.com">This is a link</Link>
			<Space>This is an area of space</Space>
			<Text>This is a paragraph of text for an {name} demo</Text>
			<View>This is a view</View>
			<Heading size={1} weight={600} color={'cyan'}>Hello World {name} </Heading>
			<Heading {...styles}>Hello World {name} </Heading>
		</div>
	)
}

export default App
