# template-matcher [![Build Status](https://travis-ci.org/bealearts/template-matcher.svg)](https://travis-ci.org/bealearts/template-matcher)

[lodash.template](https://www.npmjs.com/package/lodash.template) pattern matching extracted into an seperate module

## Install

```shell
npm install template-matcher --save
```

## Usage
```js
var matcher = require('template-matcher');

var matches = matcher('<div><input type="${attr}"/>${content}</div>', /* options */);	// Same params as lodash.template
console.log(matches);	// ['attr', 'content']
```

## Credit
See [lodash.template](https://www.npmjs.com/package/lodash.template)
