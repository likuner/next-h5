import { logger } from './logger'
import { request } from './request'

/**
 * node request
 * @param url 
 * @param method 
 * @param params 
 * @param options 
 * @returns FetchResult
 */
export const nodeRequest = async (
  url: string,
  method: string = 'get',
  params: KeyValString = {},
  options: KeyVal = {}
): Promise<FetchResult> => {
  try {
    const result = await request(url, method, params, options)
    logger.info('node-request-success', url, method, params)
    return result
  } catch (error) {
    logger.error('node-request-error', url, method, params, error)
    return Promise.reject(error)
  }
}

/**
 * node get
 * @param url 
 * @param params 
 * @param options 
 * @returns FetchResult
 */
export const nodeGet = async (
  url: string,
  params: KeyValString = {},
  options: KeyVal = {}
) => {
  return nodeRequest(url, 'get', params, options)
}

/**
 * node post
 * @param url 
 * @param params 
 * @param options 
 * @returns FetchResult
 */
export const nodePost = async (
  url: string,
  params: KeyValString = {},
  options: KeyVal = {}
): Promise<FetchResult> => {
  return nodeRequest(url, 'post', params, options)
}