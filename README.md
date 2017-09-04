<a href="https://github.com/odeum/odeum-primitives">
  <img alt="ODEUM Primitives" src="./logotype.png" />
</a>

ODEUM Primitives are React UI component primitives for [ODEUM Code](https://github.com/odeum/odeum-code) built with styled-components

[![Build Status](https://travis-ci.org/odeum/odeum-primitives.svg?branch=master)](https://travis-ci.org/odeum/odeum-primitives)
[![npm](https://img.shields.io/npm/v/odeum-primitives.svg)](https://www.npmjs.com/package/odeum-primitives)
![NPM license](https://img.shields.io/npm/l/odeum-primitives.svg?style=flat)
![NPM total downloads](https://img.shields.io/npm/dt/odeum-primitives.svg?style=flat)
![NPM monthly downloads](https://img.shields.io/npm/dm/odeum-primitives.svg?style=flat)

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

