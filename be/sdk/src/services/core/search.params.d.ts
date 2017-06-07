import { URLSearchParams } from '@angular/http';
export declare class JSONSearchParams {
    private _usp;
    setJSON(obj: any): void;
    getURLSearchParams(): URLSearchParams;
    private _JSON2URL(obj, parent);
    private _parseParam(key, value, parent);
}
