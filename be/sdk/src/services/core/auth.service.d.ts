import { InternalStorage } from '../../storage/storage.swaps';
import { SDKToken } from '../../models/BaseModels';
export declare class LoopBackAuth {
    protected storage: InternalStorage;
    private token;
    protected prefix: string;
    constructor(storage: InternalStorage);
    setRememberMe(value: boolean): void;
    setUser(user: any): void;
    setToken(token: SDKToken): void;
    getToken(): SDKToken;
    getAccessTokenId(): string;
    getCurrentUserId(): any;
    getCurrentUserData(): any;
    save(): boolean;
    protected load(prop: string): any;
    clear(): void;
    protected persist(prop: string, value: any): void;
}
