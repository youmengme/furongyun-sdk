import axios, { AxiosResponse } from "axios"

export const instance = axios.create({
  baseURL: 'http://api.fghfdf.cn/api',
  timeout: 10000
})

instance.interceptors.request.use(
  config => {
    return config
  }
)

export async function request<T>(data): Promise<T> {
  return new Promise((resolve, reject) => {
    instance(data)
      .then((res) => {
        resolve(res.data as T)
      })
      .catch(e => {
        reject(e)
      })
  })
}