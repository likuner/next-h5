import * as log4js from 'log4js'

log4js.configure({
  appenders: {
    app: {
      type: 'dateFile',
      filename: 'log/file',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      keepFileExt: true,
      numBackups: 7
    }
  },
  categories: {
    default: {
      appenders: ['app'],
      level: 'info'
    }
  },
})

const logger = log4js.getLogger()

export default logger