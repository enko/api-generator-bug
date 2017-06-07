import { Http, Headers } from '@angular/http';
import { JSONSearchParams } from './search.params';
import { ErrorHandler } from './error.service';
import { LoopBackAuth } from './auth.service';
import { LoopBackFilter } from '../../models/BaseModels';
import { SDKModels } from '../custom/SDKModels';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
export declare abstract class BaseLoopBackApi {
    protected http: Http;
    protected models: SDKModels;
    protected auth: LoopBackAuth;
    protected searchParams: JSONSearchParams;
    protected errorHandler: ErrorHandler;
    protected path: string;
    protected model: any;
    constructor(http: Http, models: SDKModels, auth: LoopBackAuth, searchParams: JSONSearchParams, errorHandler: ErrorHandler);
    request(method: string, url: string, routeParams?: any, urlParams?: any, postBody?: any): Observable<any>;
    authenticate<T>(url: string, headers: Headers): void;
    create<T>(data: T): Observable<T>;
    createMany<T>(data: T[]): Observable<T[]>;
    findById<T>(id: any, filter?: LoopBackFilter): Observable<T>;
    find<T>(filter?: LoopBackFilter): Observable<T[]>;
    exists<T>(id: any): Observable<T>;
    findOne<T>(filter?: LoopBackFilter): Observable<T>;
    updateAll<T>(where: any, data: T): Observable<{
        count: 'number';
    }>;
    deleteById<T>(id: any): Observable<T>;
    count(where?: any): Observable<{
        count: number;
    }>;
    updateAttributes<T>(id: any, data: T): Observable<T>;
    upsert<T>(data?: any): Observable<T>;
    upsertPatch<T>(data?: any): Observable<T>;
    upsertWithWhere<T>(where?: any, data?: any): Observable<T>;
    replaceOrCreate<T>(data?: any): Observable<T>;
    replaceById<T>(id: any, data?: any): Observable<T>;
    createChangeStream(): Observable<any>;
    abstract getModelName(): string;
}
