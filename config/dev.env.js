'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const local = process.env.npm_lifecycle_event
let baseUrl = ''

switch (local) {
case 'dev':
    baseUrl = '"http://119.3.151.48"'
    break;
case 'start':
    baseUrl = '"http://app.haimiansiwei.com"'
    break;
}

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"', 
    BASE_URL: baseUrl                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
})