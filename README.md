<a href="https://github.com/odeum/odeum-primitives">
  <img alt="ODEUM Primitives" src="./logotype.png" />
</a>

ODEUM Primitives are ReactJS UI primitives build for [ODEUM Code](https://github.com/odeum/odeum-code).

[![Build Status](https://travis-ci.org/odeum/odeum-primitives.svg?branch=master)](https://travis-ci.org/odeum/odeum-primitives)
[![npm](https://img.shields.io/npm/v/odeum-primitives.svg)](https://www.npmjs.com/package/odeum-primitives)
![NPM license](https://img.shields.io/npm/l/odeum-primitives.svg?style=flat)

<!-- TOC -->

- [1. Components](#1-components)
- [2. Installation](#2-installation)
- [3. Usage](#3-usage)

<!-- /TOC -->

# 1. Components
ODEUM Primitives (odeum-primitives) are a collection of simple visual components build for ODEUM Code open source UI framework. All components are build with styled-components and ReactJS and the following components will be added:

- Heading - Header component
- Image - Image component with async resource fetch and assets control
- Label - Label component
- Link - Link component
- Space - Space creates empty spaces (transparent, color)
- Text - Text paragraph
- View - Container for creating styled views


# 2. Installation
```sh
$ npm install odeum-primitives
$ yarn add odeum-primitives
```

# 3. Usage

```js
import React from 'react'
import { Heading, 
	 Image, 
	 Label, 
	 Link, 
	 Space, 
	 Text, 
	 View } from 'odeum-primitives'

const styles = {
  size: 1,
  weight: 500,
  color: 'magenta'
}
...

<Heading>Hello World</Heading>
<Heading size={1}>Hello {name}</Heading>
<Heading size={2} weight={900}>Hello {name}</Heading>
<Heading size={3} weight={500} color={'black'}>Hello {name}</Heading>
<Heading {...styles}>Heading from styles object</Heading>
```
