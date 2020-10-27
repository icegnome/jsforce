/// <reference types="node" />
/**
 *
 */
import { Duplex } from 'stream';
import { HttpRequest, HttpResponse } from './types';
import { StreamPromise } from './util/promise';
/**
 * Class for HTTP request transport
 *
 * @class
 * @protected
 */
export default class Transport {
    /**
     */
    httpRequest(params: HttpRequest): StreamPromise<HttpResponse>;
    /**
     * @protected
     */
    getRequestStreamCreator(): (req: HttpRequest) => Duplex;
}
/**
 * Class for JSONP request transport
 */
export declare class JsonpTransport extends Transport {
    static supprted: boolean;
    _jsonpParam: string;
    constructor(jsonpParam: string);
    getRequestStreamCreator(): (req: HttpRequest) => Duplex;
}
/**
 * Class for Sfdc Canvas request transport
 */
export declare class CanvasTransport extends Transport {
    static supported: boolean;
    _signedRequest: any;
    constructor(signedRequest: any);
    getRequestStreamCreator(): (req: HttpRequest) => Duplex;
}
/**
 * Class for HTTP request transport using AJAX proxy service
 */
export declare class ProxyTransport extends Transport {
    _proxyUrl: string;
    constructor(proxyUrl: string);
    /**
     * Make HTTP request via AJAX proxy
     */
    httpRequest(params: HttpRequest): StreamPromise<HttpResponse>;
}
/**
 * Class for HTTP request transport using a proxy server
 */
export declare class HttpProxyTransport extends Transport {
    _httpProxy: string;
    constructor(httpProxy: string);
    /**
     * Make HTTP request via proxy server
     */
    httpRequest(params: HttpRequest): StreamPromise<HttpResponse>;
}
