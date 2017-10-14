import Koa = require('koa')
import bodyParser = require('koa-bodyparser')
import compress = require('koa-compress')
import logger = require('koa-logger')
import serveStatic = require('koa-static')
import path = require('path')

import config from './config'

const app = new Koa()

app.use(logger())
app.use(compress())
app.use(serveStatic(path.resolve(__dirname, '../public')))
app.use(bodyParser())
app.listen(config.port)
console.log('listening on:', config.port)
