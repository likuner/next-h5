type KeyVal = Record<string, any>

type KeyValString = KeyVal | string | any[]

interface FetchResult {
  code: number
  msg: string
  data: any
}