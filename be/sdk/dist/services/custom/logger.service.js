"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const lb_config_1 = require("../../lb.config");
let LoggerService = class LoggerService {
    log(...args) {
        if (lb_config_1.LoopBackConfig.debuggable())
            console.log.apply(console, args);
    }
    info(...args) {
        if (lb_config_1.LoopBackConfig.debuggable())
            console.info.apply(console, args);
    }
    error(...args) {
        if (lb_config_1.LoopBackConfig.debuggable())
            console.error.apply(console, args);
    }
    count(arg) {
        if (lb_config_1.LoopBackConfig.debuggable())
            console.count(arg);
    }
    group(arg) {
        if (lb_config_1.LoopBackConfig.debuggable())
            console.count(arg);
    }
    groupEnd() {
        if (lb_config_1.LoopBackConfig.debuggable())
            console.groupEnd();
    }
    profile(arg) {
        if (lb_config_1.LoopBackConfig.debuggable())
            console.count(arg);
    }
    profileEnd() {
        if (lb_config_1.LoopBackConfig.debuggable())
            console.profileEnd();
    }
    time(arg) {
        if (lb_config_1.LoopBackConfig.debuggable())
            console.time(arg);
    }
    timeEnd(arg) {
        if (lb_config_1.LoopBackConfig.debuggable())
            console.timeEnd(arg);
    }
};
LoggerService = __decorate([
    core_1.Injectable()
], LoggerService);
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.service.js.map