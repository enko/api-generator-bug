"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const SDKModels_1 = require("./SDKModels");
const base_service_1 = require("../core/base.service");
const lb_config_1 = require("../../lb.config");
const auth_service_1 = require("../core/auth.service");
const search_params_1 = require("../core/search.params");
const error_service_1 = require("../core/error.service");
let UserApi = class UserApi extends base_service_1.BaseLoopBackApi {
    constructor(http, models, auth, searchParams, errorHandler) {
        super(http, models, auth, searchParams, errorHandler);
        this.http = http;
        this.models = models;
        this.auth = auth;
        this.searchParams = searchParams;
        this.errorHandler = errorHandler;
    }
    findByIdAccessTokens(id, fk) {
        let _method = "GET";
        let _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        let _routeParams = {
            id: id,
            fk: fk
        };
        let _postBody = {};
        let _urlParams = {};
        let result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    }
    destroyByIdAccessTokens(id, fk) {
        let _method = "DELETE";
        let _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        let _routeParams = {
            id: id,
            fk: fk
        };
        let _postBody = {};
        let _urlParams = {};
        let result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    }
    updateByIdAccessTokens(id, fk, data = {}) {
        let _method = "PUT";
        let _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        let _routeParams = {
            id: id,
            fk: fk
        };
        let _postBody = {
            data: data
        };
        let _urlParams = {};
        let result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    }
    getAccessTokens(id, filter = {}) {
        let _method = "GET";
        let _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Users/:id/accessTokens";
        let _routeParams = {
            id: id
        };
        let _postBody = {};
        let _urlParams = {};
        if (filter)
            _urlParams.filter = filter;
        let result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    }
    createAccessTokens(id, data = {}) {
        let _method = "POST";
        let _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Users/:id/accessTokens";
        let _routeParams = {
            id: id
        };
        let _postBody = {
            data: data
        };
        let _urlParams = {};
        let result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    }
    deleteAccessTokens(id) {
        let _method = "DELETE";
        let _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Users/:id/accessTokens";
        let _routeParams = {
            id: id
        };
        let _postBody = {};
        let _urlParams = {};
        let result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    }
    countAccessTokens(id, where = {}) {
        let _method = "GET";
        let _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Users/:id/accessTokens/count";
        let _routeParams = {
            id: id
        };
        let _postBody = {};
        let _urlParams = {};
        if (where)
            _urlParams.where = where;
        let result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    }
    patchOrCreate(data = {}) {
        let _method = "PATCH";
        let _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Users";
        let _routeParams = {};
        let _postBody = {
            data: data
        };
        let _urlParams = {};
        let result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    }
    patchAttributes(id, data = {}) {
        let _method = "PATCH";
        let _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Users/:id";
        let _routeParams = {
            id: id
        };
        let _postBody = {
            data: data
        };
        let _urlParams = {};
        let result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    }
    login(credentials, include = 'user', rememberMe = true) {
        let _method = "POST";
        let _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Users/login";
        let _routeParams = {};
        let _postBody = {
            credentials: credentials
        };
        let _urlParams = {};
        if (include)
            _urlParams.include = include;
        let result = this.request(_method, _url, _routeParams, _urlParams, _postBody)
            .map((response) => {
            response.ttl = parseInt(response.ttl);
            response.rememberMe = rememberMe;
            this.auth.setToken(response);
            return response;
        });
        return result;
    }
    logout() {
        let _method = "POST";
        let _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Users/logout";
        let _routeParams = {};
        let _postBody = {};
        let _urlParams = {};
        _urlParams.access_token = this.auth.getAccessTokenId();
        this.auth.clear();
        let result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    }
    verify(id) {
        let _method = "POST";
        let _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Users/:id/verify";
        let _routeParams = {
            id: id
        };
        let _postBody = {};
        let _urlParams = {};
        let result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    }
    confirm(uid, token, redirect = {}) {
        let _method = "GET";
        let _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Users/confirm";
        let _routeParams = {};
        let _postBody = {};
        let _urlParams = {};
        if (uid)
            _urlParams.uid = uid;
        if (token)
            _urlParams.token = token;
        if (redirect)
            _urlParams.redirect = redirect;
        let result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    }
    resetPassword(options) {
        let _method = "POST";
        let _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Users/reset";
        let _routeParams = {};
        let _postBody = {
            options: options
        };
        let _urlParams = {};
        let result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    }
    changePassword(oldPassword, newPassword) {
        let _method = "POST";
        let _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Users/change-password";
        let _routeParams = {};
        let _postBody = {};
        let _urlParams = {};
        if (oldPassword)
            _urlParams.oldPassword = oldPassword;
        if (newPassword)
            _urlParams.newPassword = newPassword;
        let result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    }
    setPassword(newPassword) {
        let _method = "POST";
        let _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Users/reset-password";
        let _routeParams = {};
        let _postBody = {};
        let _urlParams = {};
        if (newPassword)
            _urlParams.newPassword = newPassword;
        let result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    }
    createManyAccessTokens(id, data = []) {
        let _method = "POST";
        let _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Users/:id/accessTokens";
        let _routeParams = {
            id: id
        };
        let _postBody = {
            data: data
        };
        let _urlParams = {};
        let result = this.request(_method, _url, _routeParams, _urlParams, _postBody);
        return result;
    }
    getCurrent() {
        let _method = "GET";
        let _url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() + "/Users" + "/:id";
        let id = this.auth.getCurrentUserId();
        if (id == null)
            id = '__anonymous__';
        let _routeParams = { id: id };
        let _urlParams = {};
        let _postBody = {};
        return this.request(_method, _url, _routeParams, _urlParams, _postBody);
    }
    getCachedCurrent() {
        return this.auth.getCurrentUserData();
    }
    getCurrentToken() {
        return this.auth.getToken();
    }
    isAuthenticated() {
        return !(this.getCurrentId() === '' || this.getCurrentId() == null || this.getCurrentId() == 'null');
    }
    getCurrentId() {
        return this.auth.getCurrentUserId();
    }
    getModelName() {
        return "User";
    }
};
UserApi = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(http_1.Http)),
    __param(1, core_1.Inject(SDKModels_1.SDKModels)),
    __param(2, core_1.Inject(auth_service_1.LoopBackAuth)),
    __param(3, core_1.Inject(search_params_1.JSONSearchParams)),
    __param(4, core_1.Optional()), __param(4, core_1.Inject(error_service_1.ErrorHandler)),
    __metadata("design:paramtypes", [http_1.Http,
        SDKModels_1.SDKModels,
        auth_service_1.LoopBackAuth,
        search_params_1.JSONSearchParams,
        error_service_1.ErrorHandler])
], UserApi);
exports.UserApi = UserApi;
//# sourceMappingURL=User.js.map