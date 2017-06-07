export declare class BaseStorage {
    get(key: string): any;
    set(key: string, value: any): void;
    remove(key: string): void;
}
export declare class InternalStorage extends BaseStorage {
}
export declare class SDKStorage extends BaseStorage {
}
