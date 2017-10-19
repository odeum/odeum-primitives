import React from 'react'
import { render } from 'react-dom'
import App from './App'

export { default as Heading } from './components/Heading/Heading'
export { default as Image } from './components/Image/Image'
export { default as Label } from './components/Label/Label'
export { default as Link } from './components/Link/Link'
export { default as Space } from './components/Space/Space'
export { default as Text } from './components/Text/Text'
export { default as View } from './components/View/View'

render(<App name="ODEUM Primitives"/>, document.getElementById('root'))
