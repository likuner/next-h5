import { getTraceId } from './index'
import * as log4js from 'log4js'
import packageJson from '@/package.json'

const { name: appName } = packageJson

log4js.configure({
  appenders: {
    console: {
      type: 'console',
      layout: {
        type: 'pattern',
        pattern: '%d{yyyy-MM-dd hh:mm:ss} [%p] %m',
      },
    },
    dateFile: {
      type: 'dateFile',
      filename: 'log/file',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      keepFileExt: true,
      numBackups: 7,
      layout: {
        type: 'pattern',
        pattern: '[%d{yyyy-MM-dd hh:mm:ss}] [%p] [%h] [%z] %c - %X{traceId} - %m%n',
      },
    },
  },
  categories: {
    default: {
      appenders: ['console'],
      level: 'info',
    },
    [appName]: {
      appenders: ['console', 'dateFile'],
      level: 'info',
    },
  },
})

const logger = log4js.getLogger(appName)
logger.addContext('traceId', getTraceId())

export default logger