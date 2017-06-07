"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let StorageBrowser = class StorageBrowser {
    get(key) {
        let data = localStorage.getItem(key);
        return this.parse(data);
    }
    set(key, value) {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    }
    remove(key) {
        if (localStorage[key]) {
            localStorage.removeItem(key);
        }
        else {
            console.log('Trying to remove unexisting key: ', key);
        }
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
StorageBrowser = __decorate([
    core_1.Injectable()
], StorageBrowser);
exports.StorageBrowser = StorageBrowser;
//# sourceMappingURL=storage.browser.js.map