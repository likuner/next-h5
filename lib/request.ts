import qs from 'qs'

/**
 * 基础路径
 */
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

/**
 * 默认配置
 */
const defaultConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
}

/**
 * 请求方法
 * @param url 
 * @param method 
 * @param params 
 * @param options 
 * @returns FetchResult
 */
export const request = async (
  url: string,
  method: string = 'get',
  params: KeyValString = {},
  options: KeyVal = {}
): Promise<FetchResult> => {
  let fetchUrl = ['https://', 'http://'].some(h => url.startsWith(h))
    ? url : `${baseUrl}${url}`

  const config: KeyVal = {
    ...defaultConfig,
    ...options,
    method
  }
  
  if (['get', 'head'].includes(method.toLowerCase())) {
    const parseUrl = new URL(fetchUrl)
    Object.entries(
      typeof params === 'string' ? qs.parse(params) : params
    ).map(([key, val]) => {
      parseUrl.searchParams.set(key, val)
    })
    fetchUrl = String(parseUrl)
  } else {
    config.body = typeof params === 'string' ? params : JSON.stringify(params)
  }

  try {
    const resp: Response = await fetch(fetchUrl, config)
    if (!resp.ok) {
      return Promise.reject({ code: resp.status, msg: resp.statusText, data: null })
    } else {
      const result = await resp.json()
      return result
    }
  } catch (err) {
    return Promise.reject({ code: 0, msg: err, data: null })
  }
}

/**
 * get
 * @param url 
 * @param params 
 * @param options 
 * @returns FetchResult
 */
export const get = (url: string, params: KeyValString = {}, options: KeyVal = {}) => {
  return request(url, 'get', params, options)
}

/**
 * post
 * @param url 
 * @param params 
 * @param options 
 * @returns FetchResult
 */
export const post = (url: string, params: KeyValString = {}, options: KeyVal = {}) => {
  return request(url, 'post', params, options)
}