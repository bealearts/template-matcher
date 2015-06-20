
'use strict';

var matcher = require('../');
var assert = require('assert');

var matches = matcher('<div><input type="${attr}"/>${content}</div>');

assert.equal(matches.length, 2);
assert.equal(matches[0], 'attr');
assert.equal(matches[1], 'content');