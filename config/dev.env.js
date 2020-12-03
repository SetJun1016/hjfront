'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const local = process.env.npm_lifecycle_event
let baseUrl = ''

switch (local) {
case 'dev':
    baseUrl = '"http://tui.wudaojz.com/api"'
    break;
case 'start':
    baseUrl = '"http://tui.wudaojz.com/api"'
    break;
}

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"', 
    BASE_URL: baseUrl                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
})