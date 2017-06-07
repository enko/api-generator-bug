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
const search_params_1 = require("./search.params");
const error_service_1 = require("./error.service");
const auth_service_1 = require("./auth.service");
const lb_config_1 = require("../../lb.config");
const SDKModels_1 = require("../custom/SDKModels");
const Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
let BaseLoopBackApi = class BaseLoopBackApi {
    constructor(http, models, auth, searchParams, errorHandler) {
        this.http = http;
        this.models = models;
        this.auth = auth;
        this.searchParams = searchParams;
        this.errorHandler = errorHandler;
        this.model = this.models.get(this.getModelName());
    }
    request(method, url, routeParams = {}, urlParams = {}, postBody = {}) {
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.authenticate(url, headers);
        Object.keys(routeParams).forEach((key) => {
            url = url.replace(new RegExp(":" + key + "(\/|$)", "g"), routeParams[key] + "$1");
        });
        let body;
        let postBodyKeys = typeof postBody === 'object' ? Object.keys(postBody) : [];
        if (postBodyKeys.length === 1) {
            body = postBody[postBodyKeys.shift()];
        }
        else {
            body = postBody;
        }
        let filter = '';
        if (urlParams.filter && lb_config_1.LoopBackConfig.isHeadersFilteringSet()) {
            headers.append('filter', JSON.stringify(urlParams.filter));
        }
        else {
            filter = `?filter=${encodeURI(JSON.stringify(urlParams.filter))}`;
        }
        delete urlParams.filter;
        this.searchParams.setJSON(urlParams);
        let request = new http_1.Request(new http_1.RequestOptions({
            headers: headers,
            method: method,
            url: `${url}${filter}`,
            search: Object.keys(urlParams).length > 0
                ? this.searchParams.getURLSearchParams() : null,
            body: body ? JSON.stringify(body) : undefined
        }));
        return this.http.request(request)
            .map((res) => (res.text() != "" ? res.json() : {}))
            .catch((e) => this.errorHandler.handleError(e));
    }
    authenticate(url, headers) {
        if (this.auth.getAccessTokenId()) {
            headers.append('Authorization', lb_config_1.LoopBackConfig.getAuthPrefix() + this.auth.getAccessTokenId());
        }
    }
    create(data) {
        return this.request('POST', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural
        ].join('/'), undefined, undefined, { data }).map((data) => this.model.factory(data));
    }
    createMany(data) {
        return this.request('POST', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural
        ].join('/'), undefined, undefined, { data })
            .map((datum) => datum.map((data) => this.model.factory(data)));
    }
    findById(id, filter = {}) {
        let _urlParams = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request('GET', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            ':id'
        ].join('/'), { id }, _urlParams, undefined).map((data) => this.model.factory(data));
    }
    find(filter = {}) {
        return this.request('GET', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural
        ].join('/'), undefined, { filter }, undefined)
            .map((datum) => datum.map((data) => this.model.factory(data)));
    }
    exists(id) {
        return this.request('GET', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            ':id/exists'
        ].join('/'), { id }, undefined, undefined);
    }
    findOne(filter = {}) {
        return this.request('GET', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            'findOne'
        ].join('/'), undefined, { filter }, undefined).map((data) => this.model.factory(data));
    }
    updateAll(where = {}, data) {
        let _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            'update'
        ].join('/'), undefined, _urlParams, { data });
    }
    deleteById(id) {
        return this.request('DELETE', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            ':id'
        ].join('/'), { id }, undefined, undefined).map((data) => this.model.factory(data));
    }
    count(where = {}) {
        let _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('GET', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            'count'
        ].join('/'), undefined, _urlParams, undefined);
    }
    updateAttributes(id, data) {
        return this.request('PUT', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            ':id'
        ].join('/'), { id }, undefined, { data }).map((data) => this.model.factory(data));
    }
    upsert(data = {}) {
        return this.request('PUT', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
        ].join('/'), undefined, undefined, { data }).map((data) => this.model.factory(data));
    }
    upsertPatch(data = {}) {
        return this.request('PATCH', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
        ].join('/'), undefined, undefined, { data }).map((data) => this.model.factory(data));
    }
    upsertWithWhere(where = {}, data = {}) {
        let _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data }).map((data) => this.model.factory(data));
    }
    replaceOrCreate(data = {}) {
        return this.request('POST', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data }).map((data) => this.model.factory(data));
    }
    replaceById(id, data = {}) {
        return this.request('POST', [
            lb_config_1.LoopBackConfig.getPath(),
            lb_config_1.LoopBackConfig.getApiVersion(),
            this.model.getModelDefinition().plural,
            ':id', 'replace'
        ].join('/'), { id }, undefined, { data }).map((data) => this.model.factory(data));
    }
    createChangeStream() {
        let subject = new Subject_1.Subject();
        if (typeof EventSource !== 'undefined') {
            let emit = (msg) => subject.next(JSON.parse(msg.data));
            var source = new EventSource([
                lb_config_1.LoopBackConfig.getPath(),
                lb_config_1.LoopBackConfig.getApiVersion(),
                this.model.getModelDefinition().plural,
                'change-stream'
            ].join('/'));
            source.addEventListener('data', emit);
            source.onerror = emit;
        }
        else {
            console.warn('SDK Builder: EventSource is not supported');
        }
        return subject.asObservable();
    }
};
BaseLoopBackApi = __decorate([
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
], BaseLoopBackApi);
exports.BaseLoopBackApi = BaseLoopBackApi;
//# sourceMappingURL=base.service.js.map