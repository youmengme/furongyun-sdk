export interface UserInfo {
  money: string
  money_1: string
  id: string
  leixing: string
}
export interface LoginResult {
  token: string
  message: string;
  data: string
}

export interface GetBalanceResult {
  message: string
  data: {
    money: string
    money_1: string
  }
}

export interface GetMobile {
  project_id: string
  loop?: string
  operator?: string
  phone_num?: string
  scope?: string
  address?: string
  api_id?: string
  scope_black?: string
  creat_time?: string
}
export interface GetMobileResult {
  message: string
  mobile: string
  data: any[]
  "1分钟内剩余取卡数": string
}

export interface GetMessageCode {
  project_id: string
  phone_num: string
}
export interface GetMessageCodeResult {
  message: string
  code: string
  data: {
    project_id: string
    modle: string
    phone: string
    project_type: string
  }
}

export interface BaseResponse {
  message: string
  data: any[]
}

export interface ReleaseMobile {
  project_id: string
  phone_num: string
}

export interface AddBlockMobile {
  project_id: string
  phone_num: string
}