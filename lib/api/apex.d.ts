import Connection from '../connection';
import { HttpRequest, HttpMethods, Schema } from '../types';
/**
 * API class for Apex REST endpoint call
 */
export default class Apex<S extends Schema> {
    _conn: Connection<S>;
    /**
     *
     */
    constructor(conn: Connection<S>);
    _baseUrl(): string;
    /**
     * @private
     */
    _createRequestParams(method: HttpMethods, path: string, body?: Object, options?: {
        headers?: HttpRequest['headers'];
    }): HttpRequest;
    /**
     * Call Apex REST service in GET request
     */
    get(path: string, options?: Object): import("../util/promise").StreamPromise<any>;
    /**
     * Call Apex REST service in POST request
     */
    post(path: string, body?: Object, options?: Object): import("../util/promise").StreamPromise<any>;
    /**
     * Call Apex REST service in PUT request
     */
    put(path: string, body?: Object, options?: Object): import("../util/promise").StreamPromise<any>;
    /**
     * Call Apex REST service in PATCH request
     */
    patch(path: string, body?: Object, options?: Object): import("../util/promise").StreamPromise<any>;
    /**
     * Call Apex REST service in DELETE request
     */
    delete(path: string, options?: Object): import("../util/promise").StreamPromise<any>;
    /**
     * Synonym of Apex#delete()
     */
    del: (path: string, options?: Object | undefined) => import("../util/promise").StreamPromise<any>;
}
