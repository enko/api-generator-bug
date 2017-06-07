import { ModuleWithProviders } from '@angular/core';
export declare class SDKBrowserModule {
    static forRoot(internalStorageProvider?: any): ModuleWithProviders;
}
export * from './models/index';
export * from './services/index';
export * from './lb.config';
export * from './storage/storage.swaps';
export { CookieBrowser } from './storage/cookie.browser';
export { StorageBrowser } from './storage/storage.browser';
