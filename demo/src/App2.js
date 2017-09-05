import React from 'react'
import { Heading } from '../../components/Heading/Heading'
import { Image } from '../../components/Image/Image'
import { Label } from '../../components/Label/Label'
import { Link } from '../../components/Link/Link'
import { Space } from '../../components/Space/Space'
import { Text } from '../../components/Text/Text'
import { View } from '../../components/View/View'

// import { Label, Link, Space, Text, View } from 'odeum-primitives'

const App = ({ name }) => {
	return (
		<div>
			<Heading>Hello World {name} </Heading>
			<Image image={require('./logotype.png')} alt="ODEUM Code logotype" />
			<Label>This is an {name} label</Label>
			<Link url="http://odeumcode.com">This is a link</Link>
			<Space>This is an area of space</Space>
			<Text>This is a paragraph of text for an {name} demo</Text>
			<View>This is a view</View>
		</div>
	)
}

export default App
