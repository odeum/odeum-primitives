<a href="https://github.com/odeum/odeum-primitives">
  <img alt="ODEUM Primitives" src="./logotype.png" />
</a>
==============================================

React UI component primitives for [ODEUM Code](https://github.com/odeum/odeum-code) built with styled-components

[![Build Status](https://travis-ci.org/odeum/odeum-primitives.svg?branch=master)](https://travis-ci.org/odeum/odeum-primitives)

<!-- TOC -->

- [1. Components](#1-components)
- [2. Installation](#2-installation)
- [3. Usage](#3-usage)

<!-- /TOC -->

# 1. Components
ODEUM Primitives (odeum-primitives) are a collection of simple visual components for the ODEUM Code OSS framework. All components are build with styled-components and ReactJS and the following components will be added:

- Heading - a simple header component
- Image - Image component with async resource fetch and assets control
- Label - Label component
- Link - a link component
- Space - empty spaces (transparent, color)
- Text - a simple text paragraph
- View - a container for creating styled views


# 2. Installation
```sh
npm install odeum-primitives
yarn add odeum-primitives
```

# 3. Usage

```js
import React from 'react'
import { Heading, Image, Label, Link, Space, Text, View } from 'odeum-primitives'

...

<Heading>Hello World</Heading>
```

