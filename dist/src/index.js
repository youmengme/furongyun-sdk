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
exports.FuRong = void 0;
const request_1 = require("./utils/request");
class FuRong {
    constructor() {
        this.token = '';
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield request_1.request({
                    method: 'GET',
                    url: '/login',
                    params: {
                        username,
                        password
                    }
                });
                this.token = result.result.token;
                return result;
            }
            catch (e) {
                return null;
            }
        });
    }
    balance() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield request_1.request({
                    method: 'GET',
                    url: '/get_myinfo',
                    params: {
                        token: this.token
                    }
                });
                return result;
            }
            catch (e) {
                return null;
            }
        });
    }
    getMobile(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield request_1.request({
                    method: 'GET',
                    url: '/get_mobile',
                    params: Object.assign(Object.assign({}, data), { token: this.token })
                });
                console.log('resultresultresultresultresult', result);
                return result;
            }
            catch (e) {
                return null;
            }
        });
    }
    getMessageCode(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield request_1.request({
                    method: 'GET',
                    url: '/get_message',
                    params: Object.assign(Object.assign({}, data), { token: this.token })
                });
                return result;
            }
            catch (e) {
                return null;
            }
        });
    }
    releaseMobile(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield request_1.request({
                    method: 'GET',
                    url: '/free_mobile',
                    params: Object.assign(Object.assign({}, data), { token: this.token })
                });
                return result.message === 'ok';
            }
            catch (e) {
                return null;
            }
        });
    }
    addBlockMobile(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield request_1.request({
                    method: 'GET',
                    url: '/add_blacklist',
                    params: Object.assign(Object.assign({}, data), { token: this.token })
                });
                return result.message === 'ok';
            }
            catch (e) {
                return null;
            }
        });
    }
}
exports.FuRong = FuRong;
//# sourceMappingURL=index.js.map