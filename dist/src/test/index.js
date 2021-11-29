"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const furong = new index_1.FuRong();
const sleep = (s) => new Promise(resolve => setTimeout(resolve, s * 1000));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield furong.login('username', 'password');
        const mobileInfo = yield furong.getMobile({
            project_id: '128807'
        });
        console.log('mobileInfo', mobileInfo);
        let i = 0;
        const timer = setInterval(() => __awaiter(this, void 0, void 0, function* () {
            if (i >= 10) {
                clearInterval(timer);
                return;
            }
            const messageInfo = yield furong.getMessageCode({
                project_id: '128807',
                phone_num: mobileInfo.mobile
            });
            console.log('messageInfo', messageInfo);
            i++;
        }), 3000);
        const releaseInfo = yield furong.releaseMobile({
            project_id: '128807',
            phone_num: mobileInfo.mobile
        });
        console.log('releaseInfo', releaseInfo);
    });
}
main();
//# sourceMappingURL=index.js.map