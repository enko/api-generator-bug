export declare class LoggerService {
    log(...args: any[]): void;
    info(...args: any[]): void;
    error(...args: any[]): void;
    count(arg: string): void;
    group(arg: string): void;
    groupEnd(): void;
    profile(arg: string): void;
    profileEnd(): void;
    time(arg: string): void;
    timeEnd(arg: string): void;
}
