"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let CookieBrowser = class CookieBrowser {
    constructor() {
        this.cookies = {};
    }
    get(key) {
        if (!this.cookies[key]) {
            let cookie = window.document
                .cookie.split('; ')
                .filter((item) => item.split('=')[0] === key).pop();
            if (!cookie) {
                return null;
            }
            this.cookies[key] = this.parse(cookie.split('=').slice(1).join('='));
        }
        return this.cookies[key];
    }
    set(key, value, expires) {
        this.cookies[key] = value;
        let cookie = `${key}=${value}; path=/${expires ? `; expires=${expires.toUTCString()}` : ''}`;
        window.document.cookie = cookie;
    }
    remove(key) {
        document.cookie = key + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        delete this.cookies[key];
    }
    parse(value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    }
};
CookieBrowser = __decorate([
    core_1.Injectable()
], CookieBrowser);
exports.CookieBrowser = CookieBrowser;
//# sourceMappingURL=cookie.browser.js.map