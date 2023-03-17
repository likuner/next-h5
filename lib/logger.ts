import * as log4js from 'log4js'

log4js.configure({
  appenders: {
    next: { type: 'file', filename: 'log/logger.log', maxLogSize: 1024 * 1024 * 5, backups: 10 }
  },
  categories: {
    default: { appenders: ['next'], level: 'info' }
  },
})

const logger = log4js.getLogger()

export default logger