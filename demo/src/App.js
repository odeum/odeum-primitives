import React from 'react'
import { Heading, Image, Label, Link, Space, Text, View } from './index'

const styles = {
	size: 1,
	weight: 500,
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
			<Heading size={1} weight={500} color={'black'}>Heading 1 from {name} </Heading>
			<Heading {...styles}>Heading 1 from {name} </Heading>
			<Heading size={2} weight={500} color={'#3B97D3'}>Heading 2 from {name} </Heading>
			<Heading size={3} weight={500} color={'#3B97D3'}>Heading 3 from {name} </Heading>
			<Heading size={4} weight={500} color={'#3B97D3'}>Heading 4 from {name} </Heading>
			<Heading size={5} weight={500} color={'#3B97D3'}>Heading 5 from {name} </Heading>
			<Heading size={6} weight={500} color={'#3B97D3'}>Heading 6 from {name} </Heading>
		</div>
	)
}

export default App
