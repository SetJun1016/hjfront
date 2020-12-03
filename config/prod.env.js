'use strict'

const PARAMS = process.env.npm_lifecycle_event
let baseUrl = ''

switch (PARAMS) {
case 'test':
    baseUrl = '"http://tui.wudaojz.com/api"'
    break;
case 'build':
    baseUrl = '"http://tui.wudaojz.com/api"'
    break;
default:
    baseUrl = '"http://tui.wudaojz.com/api"'
}

module.exports = {
    NODE_ENV: '"production"',
    BASE_URL: baseUrl
}