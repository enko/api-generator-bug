export interface UserInterface {
    "realm"?: string;
    "username"?: string;
    "password": string;
    "email": string;
    "emailVerified"?: boolean;
    "verificationToken"?: string;
    "id"?: number;
    accessTokens?: any[];
}
export declare class User implements UserInterface {
    "realm": string;
    "username": string;
    "password": string;
    "email": string;
    "emailVerified": boolean;
    "verificationToken": string;
    "id": number;
    accessTokens: any[];
    constructor(data?: UserInterface);
    static getModelName(): string;
    static factory(data: UserInterface): User;
    static getModelDefinition(): {
        name: string;
        plural: string;
        properties: {
            "realm": {
                name: string;
                type: string;
            };
            "username": {
                name: string;
                type: string;
            };
            "password": {
                name: string;
                type: string;
            };
            "email": {
                name: string;
                type: string;
            };
            "emailVerified": {
                name: string;
                type: string;
            };
            "verificationToken": {
                name: string;
                type: string;
            };
            "id": {
                name: string;
                type: string;
            };
        };
        relations: {
            accessTokens: {
                name: string;
                type: string;
                model: string;
            };
        };
    };
}
