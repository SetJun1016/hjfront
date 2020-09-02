'use strict'

const PARAMS = process.env.npm_lifecycle_event
let baseUrl = ''

switch (PARAMS) {
case 'test':
    baseUrl = '"http://119.3.151.48"'
    break;
case 'build':
    baseUrl = '"http://app.haimiansiwei.com"'
    break;
default:
    baseUrl = '"http://119.3.151.48"'
}

module.exports = {
    NODE_ENV: '"production"',
    BASE_URL: baseUrl
}