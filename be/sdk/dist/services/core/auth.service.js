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
const storage_swaps_1 = require("../../storage/storage.swaps");
const BaseModels_1 = require("../../models/BaseModels");
let LoopBackAuth = class LoopBackAuth {
    constructor(storage) {
        this.storage = storage;
        this.token = new BaseModels_1.SDKToken();
        this.prefix = '$LoopBackSDK$';
        this.token.id = this.load('id');
        this.token.user = this.load('user');
        this.token.userId = this.load('userId');
        this.token.created = this.load('created');
        this.token.ttl = this.load('ttl');
        this.token.rememberMe = this.load('rememberMe');
    }
    setRememberMe(value) {
        this.token.rememberMe = value;
    }
    setUser(user) {
        this.token.user = user;
        this.save();
    }
    setToken(token) {
        this.token = Object.assign(this.token, token);
        this.save();
    }
    getToken() {
        return this.token;
    }
    getAccessTokenId() {
        return this.token.id;
    }
    getCurrentUserId() {
        return this.token.userId;
    }
    getCurrentUserData() {
        return (typeof this.token.user === 'string') ? JSON.parse(this.token.user) : this.token.user;
    }
    save() {
        if (this.token.rememberMe) {
            this.persist('id', this.token.id);
            this.persist('user', this.token.user);
            this.persist('userId', this.token.userId);
            this.persist('created', this.token.created);
            this.persist('ttl', this.token.ttl);
            this.persist('rememberMe', this.token.rememberMe);
            return true;
        }
        else {
            return false;
        }
    }
    ;
    load(prop) {
        return this.storage.get(`${this.prefix}${prop}`);
    }
    clear() {
        Object.keys(this.token).forEach((prop) => this.storage.remove(`${this.prefix}${prop}`));
        this.token = new BaseModels_1.SDKToken();
    }
    persist(prop, value) {
        try {
            this.storage.set(`${this.prefix}${prop}`, (typeof value === 'object') ? JSON.stringify(value) : value);
        }
        catch (err) {
            console.error('Cannot access local/session storage:', err);
        }
    }
};
LoopBackAuth = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(storage_swaps_1.InternalStorage)),
    __metadata("design:paramtypes", [storage_swaps_1.InternalStorage])
], LoopBackAuth);
exports.LoopBackAuth = LoopBackAuth;
//# sourceMappingURL=auth.service.js.map