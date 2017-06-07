"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseStorage {
    get(key) { }
    set(key, value) { }
    remove(key) { }
}
exports.BaseStorage = BaseStorage;
class InternalStorage extends BaseStorage {
}
exports.InternalStorage = InternalStorage;
class SDKStorage extends BaseStorage {
}
exports.SDKStorage = SDKStorage;
//# sourceMappingURL=storage.swaps.js.map