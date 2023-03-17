import { v4 as uuidv4 } from 'uuid'

/**
 * Not SSR
 */
export const isClient = typeof window !== 'undefined'

/**
 * 生成一个 uuid
 * @returns string
 */
export const getUuid = (): string => {
  return uuidv4()
}

/**
 * 全局的 traceId
 */
let traceId = ''

/**
 * 获取全局的 traceId
 * @returns string
 */
export const getTraceId = (): string => {
  if (!traceId) {
    traceId = getUuid()
  }
  return traceId
}
