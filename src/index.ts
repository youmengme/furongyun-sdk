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
  // @ts-ignore
  async login(username: string, password: string): Promise<LoginResult> {
    this.token = 'hrbPGIzmhoUJX7vgz8Pv44f1pel3Gtm+6q5BWtsWB9+/zladypd82y8zU1b5+LJhupSP/Ib/Stu3H/0j5E6fS32iSJMiFjZORI8KZs/IqBRylgcDmh29i2hOCfjOWnKNRhERMJoqZ1AtV3DaWehFuUFUaCBZUNHQGM7e+a7P2+w='
    // try {
    //   const result = await request<LoginResult>({
    //     method: 'GET',
    //     url: '/login',
    //     params: {
    //       username,
    //       password
    //     }
    //   })
    //   this.token = result.token
    //   return result
    // } catch (e) {
    //   return null
    // }
  }
  async balance(): Promise<GetBalanceResult> {
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
  async getMobile(data: GetMobile): Promise<GetMobileResult> {
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
  async getMessageCode(data: GetMessageCode): Promise<GetMessageCodeResult> {
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
  async releaseMobile(data: ReleaseMobile): Promise<boolean> {
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
  async addBlockMobile(data: AddBlockMobile): Promise<boolean> {
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