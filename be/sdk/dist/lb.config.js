"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoopBackConfig {
    static setApiVersion(version = 'api') {
        LoopBackConfig.version = version;
    }
    static getApiVersion() {
        return LoopBackConfig.version;
    }
    static setBaseURL(url = '/') {
        LoopBackConfig.path = url;
    }
    static getPath() {
        return LoopBackConfig.path;
    }
    static setAuthPrefix(authPrefix = '') {
        LoopBackConfig.authPrefix = authPrefix;
    }
    static getAuthPrefix() {
        return LoopBackConfig.authPrefix;
    }
    static setDebugMode(isEnabled) {
        LoopBackConfig.debug = isEnabled;
    }
    static debuggable() {
        return LoopBackConfig.debug;
    }
    static filterOnUrl() {
        LoopBackConfig.filterOn = 'url';
    }
    static filterOnHeaders() {
        LoopBackConfig.filterOn = 'headers';
    }
    static isHeadersFilteringSet() {
        return (LoopBackConfig.filterOn === 'headers');
    }
}
LoopBackConfig.path = '//0.0.0.0:3000';
LoopBackConfig.version = 'api';
LoopBackConfig.authPrefix = '';
LoopBackConfig.debug = true;
LoopBackConfig.filterOn = 'headers';
exports.LoopBackConfig = LoopBackConfig;
//# sourceMappingURL=lb.config.js.map