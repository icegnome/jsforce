/// <reference types="node" />
/**
 *
 */
import { EventEmitter } from 'events';
import { HttpRequest, Record, SaveResult, DescribeGlobalResult, DescribeSObjectResult, DescribeTab, DescribeTheme, DescribeQuickActionResult, UpdatedResult, DeletedResult, OrganizationLimitsInfo, Optional, SignedRequestObject, DmlOptions, RetrieveOptions, Schema, SObjectNames, SObjectInputRecord, SObjectUpdateRecord, SObjectFieldNames } from './types';
import { StreamPromise } from './util/promise';
import Transport from './transport';
import { Logger } from './util/logger';
import { LogLevelConfig } from './util/logger';
import OAuth2 from './oauth2';
import { OAuth2Config } from './oauth2';
import Cache, { CachedFunction } from './cache';
import SessionRefreshDelegate, { SessionRefreshFunc } from './session-refresh-delegate';
import Query from './query';
import { QueryOptions } from './query';
import SObject from './sobject';
import QuickAction from './quick-action';
import Apex from './api/apex';
import Metadata from './api/metadata';
import SoapApi from './api/soap';
/**
 * type definitions
 */
export declare type ConnectionConfig<S extends Schema> = {
    version?: string;
    loginUrl?: string;
    accessToken?: string;
    refreshToken?: string;
    instanceUrl?: string;
    sessionId?: string;
    serverUrl?: string;
    signedRequest?: string;
    oauth2?: OAuth2 | OAuth2Config;
    maxRequest?: number;
    proxyUrl?: string;
    httpProxy?: string;
    logLevel?: LogLevelConfig;
    callOptions?: {
        [name: string]: string;
    };
    refreshFn?: SessionRefreshFunc<S>;
};
export declare type UserInfo = {
    id: string;
    organizationId: string;
    url: string;
};
export declare type LimitInfo = {
    apiUsage?: {
        used: number;
        limit: number;
    };
};
export declare type ConnectionEstablishOptions = {
    accessToken?: Optional<string>;
    refreshToken?: Optional<string>;
    instanceUrl?: Optional<string>;
    sessionId?: Optional<string>;
    serverUrl?: Optional<string>;
    signedRequest?: Optional<string | SignedRequestObject>;
    userInfo?: Optional<UserInfo>;
};
/**
 *
 */
export default class Connection<S extends Schema = Schema> extends EventEmitter {
    static _logger: Logger;
    version: string;
    loginUrl: string;
    instanceUrl: string;
    accessToken: Optional<string>;
    refreshToken: Optional<string>;
    userInfo: Optional<UserInfo>;
    limitInfo: LimitInfo;
    oauth2: OAuth2;
    sobjects: {
        [N in SObjectNames<S>]?: SObject<S, N>;
    };
    cache: Cache;
    _callOptions: Optional<{
        [name: string]: string;
    }>;
    _maxRequest: number;
    _logger: Logger;
    _logLevel: Optional<LogLevelConfig>;
    _transport: Transport;
    _sessionType: Optional<'soap' | 'oauth2'>;
    _refreshDelegate: Optional<SessionRefreshDelegate<S>>;
    describe$: CachedFunction<(name: string) => Promise<DescribeSObjectResult>>;
    describe$$: CachedFunction<(name: string) => DescribeSObjectResult>;
    describeSObject: (name: string) => Promise<DescribeSObjectResult>;
    describeSObject$: CachedFunction<(name: string) => Promise<DescribeSObjectResult>>;
    describeSObject$$: CachedFunction<(name: string) => DescribeSObjectResult>;
    describeGlobal$: CachedFunction<() => Promise<DescribeGlobalResult>>;
    describeGlobal$$: CachedFunction<() => DescribeGlobalResult>;
    get apex(): Apex<S>;
    get metadata(): Metadata<S>;
    get soap(): SoapApi<S>;
    /**
     *
     */
    constructor(config?: ConnectionConfig<S>);
    _establish(options: ConnectionEstablishOptions): void;
    _clearSession(): void;
    _resetInstance(): void;
    /**
     * Authorize (using oauth2 web server flow)
     */
    authorize(code: string, params?: {
        [name: string]: string;
    }): Promise<UserInfo>;
    /**
     *
     */
    login(username: string, password: string): Promise<UserInfo>;
    /**
     * Login by OAuth2 username & password flow
     */
    loginByOAuth2(username: string, password: string): Promise<UserInfo>;
    /**
     *
     */
    loginBySoap(username: string, password: string): Promise<UserInfo>;
    /**
     * Logout the current session
     */
    logout(revoke?: boolean): Promise<void>;
    /**
     * Logout the current session by revoking access token via OAuth2 session revoke
     */
    logoutByOAuth2(revoke?: boolean): Promise<void>;
    /**
     * Logout the session by using SOAP web service API
     */
    logoutBySoap(revoke?: boolean): Promise<void>;
    /**
     * Send REST API request with given HTTP request info, with connected session information.
     *
     * Endpoint URL can be absolute URL ('https://na1.salesforce.com/services/data/v32.0/sobjects/Account/describe')
     * , relative path from root ('/services/data/v32.0/sobjects/Account/describe')
     * , or relative path from version root ('/sobjects/Account/describe').
     */
    request(request: string | HttpRequest, options?: Object): StreamPromise<any>;
    /**
     * Send HTTP GET request
     *
     * Endpoint URL can be absolute URL ('https://na1.salesforce.com/services/data/v32.0/sobjects/Account/describe')
     * , relative path from root ('/services/data/v32.0/sobjects/Account/describe')
     * , or relative path from version root ('/sobjects/Account/describe').
     */
    requestGet(url: string, options?: Object): StreamPromise<any>;
    /**
     * Send HTTP POST request with JSON body, with connected session information
     *
     * Endpoint URL can be absolute URL ('https://na1.salesforce.com/services/data/v32.0/sobjects/Account/describe')
     * , relative path from root ('/services/data/v32.0/sobjects/Account/describe')
     * , or relative path from version root ('/sobjects/Account/describe').
     */
    requestPost(url: string, body: Object, options?: Object): StreamPromise<any>;
    /**
     * Send HTTP PUT request with JSON body, with connected session information
     *
     * Endpoint URL can be absolute URL ('https://na1.salesforce.com/services/data/v32.0/sobjects/Account/describe')
     * , relative path from root ('/services/data/v32.0/sobjects/Account/describe')
     * , or relative path from version root ('/sobjects/Account/describe').
     */
    requestPut(url: string, body: Object, options?: Object): StreamPromise<any>;
    /**
     * Send HTTP PATCH request with JSON body
     *
     * Endpoint URL can be absolute URL ('https://na1.salesforce.com/services/data/v32.0/sobjects/Account/describe')
     * , relative path from root ('/services/data/v32.0/sobjects/Account/describe')
     * , or relative path from version root ('/sobjects/Account/describe').
     */
    requestPatch(url: string, body: Object, options?: Object): StreamPromise<any>;
    /**
     * Send HTTP DELETE request
     *
     * Endpoint URL can be absolute URL ('https://na1.salesforce.com/services/data/v32.0/sobjects/Account/describe')
     * , relative path from root ('/services/data/v32.0/sobjects/Account/describe')
     * , or relative path from version root ('/sobjects/Account/describe').
     */
    requestDelete(url: string, options?: Object): StreamPromise<any>;
    /** @private **/
    _baseUrl(): string;
    /**
     * Convert path to absolute url
     * @private
     */
    _normalizeUrl(url: string): string;
    /**
     *
     */
    query(soql: string, options?: Partial<QueryOptions>): Query<S, Extract<keyof S["SObjects"], string>, Record, "QueryResult">;
    /**
     *
     */
    queryMore(locator: string, options?: QueryOptions): Query<S, Extract<keyof S["SObjects"], string>, Record, "QueryResult">;
    _ensureVersion(majorVersion: number): boolean;
    _supports(feature: string): boolean;
    /**
     * Retrieve specified records
     */
    retrieve<N extends SObjectNames<S>>(type: N, ids: string, options?: RetrieveOptions): Promise<Record>;
    retrieve<N extends SObjectNames<S>>(type: N, ids: string[], options?: RetrieveOptions): Promise<Record[]>;
    retrieve<N extends SObjectNames<S>>(type: N, ids: string | string[], options?: RetrieveOptions): Promise<Record | Record[]>;
    /** @private */
    _retrieveSingle(type: string, id: string, options: RetrieveOptions): Promise<any>;
    /** @private */
    _retrieveParallel(type: string, ids: string[], options: RetrieveOptions): Promise<any[]>;
    /** @private */
    _retrieveMany(type: string, ids: string[], options: RetrieveOptions): Promise<any>;
    /**
     * Create records
     */
    create<N extends SObjectNames<S>, InputRecord extends SObjectInputRecord<S, N> = SObjectInputRecord<S, N>>(type: N, records: InputRecord[], options?: DmlOptions): Promise<SaveResult[]>;
    create<N extends SObjectNames<S>, InputRecord extends SObjectInputRecord<S, N> = SObjectInputRecord<S, N>>(type: N, record: InputRecord, options?: DmlOptions): Promise<SaveResult>;
    create<N extends SObjectNames<S>, InputRecord extends SObjectInputRecord<S, N> = SObjectInputRecord<S, N>>(type: N, records: InputRecord | InputRecord[], options?: DmlOptions): Promise<SaveResult | SaveResult[]>;
    /** @private */
    _createSingle(type: string, record: Record, options: DmlOptions): Promise<any>;
    /** @private */
    _createParallel(type: string, records: Record[], options: DmlOptions): Promise<any[]>;
    /** @private */
    _createMany(type: string, records: Record[], options: DmlOptions): Promise<SaveResult[]>;
    /**
     * Synonym of Connection#create()
     */
    insert: {
        <N extends Extract<keyof S["SObjects"], string>, InputRecord extends Partial<import("./types").SObjectRecord<S, N, "*", Record, {}>> = Partial<import("./types").SObjectRecord<S, N, "*", Record, {}>>>(type: N, records: InputRecord[], options?: DmlOptions | undefined): Promise<SaveResult[]>;
        <N_1 extends Extract<keyof S["SObjects"], string>, InputRecord_1 extends Partial<import("./types").SObjectRecord<S, N_1, "*", Record, {}>> = Partial<import("./types").SObjectRecord<S, N_1, "*", Record, {}>>>(type: N_1, record: InputRecord_1, options?: DmlOptions | undefined): Promise<SaveResult>;
        <N_2 extends Extract<keyof S["SObjects"], string>, InputRecord_2 extends Partial<import("./types").SObjectRecord<S, N_2, "*", Record, {}>> = Partial<import("./types").SObjectRecord<S, N_2, "*", Record, {}>>>(type: N_2, records: InputRecord_2 | InputRecord_2[], options?: DmlOptions | undefined): Promise<SaveResult | SaveResult[]>;
    };
    /**
     * Update records
     */
    update<N extends SObjectNames<S>, UpdateRecord extends SObjectUpdateRecord<S, N> = SObjectUpdateRecord<S, N>>(type: N, records: UpdateRecord[], options?: DmlOptions): Promise<SaveResult[]>;
    update<N extends SObjectNames<S>, UpdateRecord extends SObjectUpdateRecord<S, N> = SObjectUpdateRecord<S, N>>(type: N, record: UpdateRecord, options?: DmlOptions): Promise<SaveResult>;
    update<N extends SObjectNames<S>, UpdateRecord extends SObjectUpdateRecord<S, N> = SObjectUpdateRecord<S, N>>(type: N, records: UpdateRecord | UpdateRecord[], options?: DmlOptions): Promise<SaveResult | SaveResult[]>;
    /** @private */
    _updateSingle(type: string, record: Record, options: DmlOptions): Promise<SaveResult>;
    /** @private */
    _updateParallel(type: string, records: Record[], options: DmlOptions): Promise<SaveResult[]>;
    /** @private */
    _updateMany(type: string, records: Record[], options: DmlOptions): Promise<SaveResult[]>;
    /**
     * Upsert records
     */
    upsert<N extends SObjectNames<S>, InputRecord extends SObjectInputRecord<S, N> = SObjectInputRecord<S, N>, FieldNames extends SObjectFieldNames<S, N> = SObjectFieldNames<S, N>>(type: N, records: InputRecord[], extIdField: FieldNames, options?: DmlOptions): Promise<SaveResult[]>;
    upsert<N extends SObjectNames<S>, InputRecord extends SObjectInputRecord<S, N> = SObjectInputRecord<S, N>, FieldNames extends SObjectFieldNames<S, N> = SObjectFieldNames<S, N>>(type: N, record: InputRecord, extIdField: FieldNames, options?: DmlOptions): Promise<SaveResult>;
    upsert<N extends SObjectNames<S>, InputRecord extends SObjectInputRecord<S, N> = SObjectInputRecord<S, N>, FieldNames extends SObjectFieldNames<S, N> = SObjectFieldNames<S, N>>(type: N, records: InputRecord | InputRecord[], extIdField: FieldNames, options?: DmlOptions): Promise<SaveResult | SaveResult[]>;
    /**
     * Delete records
     */
    destroy<N extends SObjectNames<S>>(type: N, ids: string[], options?: DmlOptions): Promise<SaveResult[]>;
    destroy<N extends SObjectNames<S>>(type: N, id: string, options?: DmlOptions): Promise<SaveResult>;
    destroy<N extends SObjectNames<S>>(type: N, ids: string | string[], options?: DmlOptions): Promise<SaveResult | SaveResult[]>;
    /** @private */
    _destroySingle(type: string, id: string, options: DmlOptions): Promise<SaveResult>;
    /** @private */
    _destroyParallel(type: string, ids: string[], options: DmlOptions): Promise<SaveResult[]>;
    /** @private */
    _destroyMany(type: string, ids: string[], options: DmlOptions): Promise<SaveResult[]>;
    /**
     * Synonym of Connection#destroy()
     */
    delete: {
        <N extends Extract<keyof S["SObjects"], string>>(type: N, ids: string[], options?: DmlOptions | undefined): Promise<SaveResult[]>;
        <N_1 extends Extract<keyof S["SObjects"], string>>(type: N_1, id: string, options?: DmlOptions | undefined): Promise<SaveResult>;
        <N_2 extends Extract<keyof S["SObjects"], string>>(type: N_2, ids: string | string[], options?: DmlOptions | undefined): Promise<SaveResult | SaveResult[]>;
    };
    /**
     * Synonym of Connection#destroy()
     */
    del: {
        <N extends Extract<keyof S["SObjects"], string>>(type: N, ids: string[], options?: DmlOptions | undefined): Promise<SaveResult[]>;
        <N_1 extends Extract<keyof S["SObjects"], string>>(type: N_1, id: string, options?: DmlOptions | undefined): Promise<SaveResult>;
        <N_2 extends Extract<keyof S["SObjects"], string>>(type: N_2, ids: string | string[], options?: DmlOptions | undefined): Promise<SaveResult | SaveResult[]>;
    };
    /**
     * Describe SObject metadata
     */
    describe(type: string): Promise<DescribeSObjectResult>;
    /**
     * Describe global SObjects
     */
    describeGlobal(): Promise<DescribeGlobalResult>;
    /**
     * Get SObject instance
     */
    sobject<N extends SObjectNames<S>>(type: N): SObject<S, N>;
    sobject<N extends SObjectNames<S>>(type: string): SObject<S, N>;
    /**
     * Get identity information of current user
     */
    identity(options?: {
        headers?: {
            [name: string]: string;
        };
    }): Promise<any>;
    /**
     * List recently viewed records
     */
    recent(type?: string | number, limit?: number): Promise<any>;
    /**
     * Retrieve updated records
     */
    updated(type: string, start: string | Date, end: string | Date): Promise<UpdatedResult>;
    /**
     * Retrieve deleted records
     */
    deleted(type: string, start: string | Date, end: string | Date): Promise<DeletedResult>;
    /**
     * Returns a list of all tabs
     */
    tabs(): Promise<DescribeTab[]>;
    /**
     * Returns curren system limit in the organization
     */
    limits(): Promise<OrganizationLimitsInfo>;
    /**
     * Returns a theme info
     */
    theme(): Promise<DescribeTheme>;
    /**
     * Returns all registered global quick actions
     */
    quickActions(): Promise<DescribeQuickActionResult[]>;
    /**
     * Get reference for specified global quick aciton
     */
    quickAction(actionName: string): QuickAction<S>;
}
