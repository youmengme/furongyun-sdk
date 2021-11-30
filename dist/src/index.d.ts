import { LoginResult, GetBalanceResult, GetMobile, GetMobileResult, GetMessageCode, GetMessageCodeResult, ReleaseMobile, AddBlockMobile } from './interface';
export declare class FuRong {
    token: string;
    constructor();
    login(username: string, password: string): Promise<LoginResult | null>;
    balance(): Promise<GetBalanceResult | null>;
    getMobile(data: GetMobile): Promise<GetMobileResult | null>;
    getMessageCode(data: GetMessageCode): Promise<GetMessageCodeResult | null>;
    releaseMobile(data: ReleaseMobile): Promise<boolean | null>;
    addBlockMobile(data: AddBlockMobile): Promise<boolean | null>;
}
