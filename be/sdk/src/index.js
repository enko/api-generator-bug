"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const search_params_1 = require("./services/core/search.params");
const error_service_1 = require("./services/core/error.service");
const auth_service_1 = require("./services/core/auth.service");
const logger_service_1 = require("./services/custom/logger.service");
const SDKModels_1 = require("./services/custom/SDKModels");
const storage_swaps_1 = require("./storage/storage.swaps");
const http_1 = require("@angular/http");
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const cookie_browser_1 = require("./storage/cookie.browser");
const storage_browser_1 = require("./storage/storage.browser");
const User_1 = require("./services/custom/User");
let SDKBrowserModule = SDKBrowserModule_1 = class SDKBrowserModule {
    static forRoot(internalStorageProvider = {
            provide: storage_swaps_1.InternalStorage,
            useClass: cookie_browser_1.CookieBrowser
        }) {
        return {
            ngModule: SDKBrowserModule_1,
            providers: [
                auth_service_1.LoopBackAuth,
                logger_service_1.LoggerService,
                search_params_1.JSONSearchParams,
                SDKModels_1.SDKModels,
                User_1.UserApi,
                internalStorageProvider,
                { provide: storage_swaps_1.SDKStorage, useClass: storage_browser_1.StorageBrowser }
            ]
        };
    }
};
SDKBrowserModule = SDKBrowserModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, http_1.HttpModule],
        declarations: [],
        exports: [],
        providers: [
            error_service_1.ErrorHandler
        ]
    })
], SDKBrowserModule);
exports.SDKBrowserModule = SDKBrowserModule;
__export(require("./models/index"));
__export(require("./services/index"));
__export(require("./lb.config"));
__export(require("./storage/storage.swaps"));
var cookie_browser_2 = require("./storage/cookie.browser");
exports.CookieBrowser = cookie_browser_2.CookieBrowser;
var storage_browser_2 = require("./storage/storage.browser");
exports.StorageBrowser = storage_browser_2.StorageBrowser;
var SDKBrowserModule_1;
//# sourceMappingURL=index.js.map