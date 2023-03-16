import * as log4js from 'log4js'

log4js.configure({
  appenders: {
    next: { type: 'file', filename: 'log/logger.log' }
  },
  categories: {
    default: { appenders: ['next'], level: 'info' }
  },
})

const logger = log4js.getLogger()

export default logger