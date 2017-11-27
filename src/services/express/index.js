import bodyParser from 'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import { env } from 'config'
import express from 'express'
import forceSSL from 'express-force-ssl'
import morgan from 'morgan'
import path from 'path'

export default (routes) => {
  const app = express()

  /* istanbul ignore next */
  if (env === 'production') {
    console.log('Please verify you have loaded valid ssl certificate in the sslcert folder')

    app.set('forceSSLOptions', {
      enable301Redirects: true,
      trustXFPHeader: true,
    })
    app.use(forceSSL)
  }

  /* istanbul ignore next */
  if (env === 'production' || env === 'development') {
    app.use(compression())
    app.use(morgan('dev'))
    app.use(cookieParser())
    app.use(express.static(path.join(process.cwd(), env === 'development' ? 'public' : 'dist')))
  }

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(routes)

  return app
}
