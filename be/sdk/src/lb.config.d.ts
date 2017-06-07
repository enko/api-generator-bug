export declare class LoopBackConfig {
    private static path;
    private static version;
    private static authPrefix;
    private static debug;
    private static filterOn;
    static setApiVersion(version?: string): void;
    static getApiVersion(): string | number;
    static setBaseURL(url?: string): void;
    static getPath(): string;
    static setAuthPrefix(authPrefix?: string): void;
    static getAuthPrefix(): string;
    static setDebugMode(isEnabled: boolean): void;
    static debuggable(): boolean;
    static filterOnUrl(): void;
    static filterOnHeaders(): void;
    static isHeadersFilteringSet(): boolean;
}
