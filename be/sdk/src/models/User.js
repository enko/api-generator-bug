"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(data) {
        Object.assign(this, data);
    }
    static getModelName() {
        return "User";
    }
    static factory(data) {
        return new User(data);
    }
    static getModelDefinition() {
        return {
            name: 'User',
            plural: 'Users',
            properties: {
                "realm": {
                    name: 'realm',
                    type: 'string'
                },
                "username": {
                    name: 'username',
                    type: 'string'
                },
                "password": {
                    name: 'password',
                    type: 'string'
                },
                "email": {
                    name: 'email',
                    type: 'string'
                },
                "emailVerified": {
                    name: 'emailVerified',
                    type: 'boolean'
                },
                "verificationToken": {
                    name: 'verificationToken',
                    type: 'string'
                },
                "id": {
                    name: 'id',
                    type: 'number'
                },
            },
            relations: {
                accessTokens: {
                    name: 'accessTokens',
                    type: 'any[]',
                    model: ''
                },
            }
        };
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map