import { request } from './utils/request'
import {
  LoginResult,
  GetBalanceResult,
  GetMobile,
  GetMobileResult,
  GetMessageCode,
  GetMessageCodeResult,
  BaseResponse,
  ReleaseMobile,
  AddBlockMobile
} from './interface'

export class FuRong {
  token: string = ''
  constructor() { }
  async login(username: string, password: string): Promise<LoginResult | null> {
    try {
      const result = await request<LoginResult>({
        method: 'GET',
        url: '/login',
        params: {
          username,
          password
        }
      })
      this.token = result.result.token
      return result
    } catch (e) {
      return null
    }
  }
  async balance(): Promise<GetBalanceResult | null> {
    try {
      const result = await request<GetBalanceResult>({
        method: 'GET',
        url: '/get_myinfo',
        params: {
          token: this.token
        }
      })
      return result
    } catch (e) {
      return null
    }
  }
  async getMobile(data: GetMobile): Promise<GetMobileResult | null> {
    try {
      const result = await request<GetMobileResult>({
        method: 'GET',
        url: '/get_mobile',
        params: {
          ...data,
          token: this.token
        }
      })
      console.log('resultresultresultresultresult', result)
      return result
    } catch (e) {
      return null
    }
  }
  async getMessageCode(data: GetMessageCode): Promise<GetMessageCodeResult |  null> {
    try {
      const result = await request<GetMessageCodeResult>({
        method: 'GET',
        url: '/get_message',
        params: {
          ...data,
          token: this.token
        }
      })
      return result
    } catch (e) {
      return null
    }
  }
  async releaseMobile(data: ReleaseMobile): Promise<boolean | null> {
    try {
      const result = await request<BaseResponse>({
        method: 'GET',
        url: '/free_mobile',
        params: {
          ...data,
          token: this.token
        }
      })
      return result.message === 'ok'
    } catch (e) {
      return null
    }
  }
  async addBlockMobile(data: AddBlockMobile): Promise<boolean | null> {
    try {
      const result = await request<BaseResponse>({
        method: 'GET',
        url: '/add_blacklist',
        params: {
          ...data,
          token: this.token
        }
      })
      return result.message === 'ok'
    } catch (e) {
      return null
    }
  }
}