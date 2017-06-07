"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccessToken {
    constructor(data) {
        Object.assign(this, data);
    }
    static getModelName() {
        return "AccessToken";
    }
    static factory(data) {
        return new AccessToken(data);
    }
    static getModelDefinition() {
        return {
            name: 'AccessToken',
            plural: 'AccessTokens',
            properties: {
                "id": {
                    name: 'id',
                    type: 'string'
                },
                "ttl": {
                    name: 'ttl',
                    type: 'number',
                    default: 1209600
                },
                "scopes": {
                    name: 'scopes',
                    type: '["string"]'
                },
                "created": {
                    name: 'created',
                    type: 'Date'
                },
                "userId": {
                    name: 'userId',
                    type: 'string'
                },
            },
            relations: {
                user: {
                    name: 'user',
                    type: 'User',
                    model: 'User'
                },
            }
        };
    }
}
exports.AccessToken = AccessToken;
class SDKToken {
    constructor(data) {
        this.id = null;
        this.ttl = null;
        this.scopes = null;
        this.created = null;
        this.userId = null;
        this.user = null;
        this.rememberMe = null;
        Object.assign(this, data);
    }
}
exports.SDKToken = SDKToken;
//# sourceMappingURL=BaseModels.js.map