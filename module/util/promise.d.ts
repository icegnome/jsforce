/// <reference types="node" />
/**
 *
 */
import { Duplex } from 'stream';
declare type SetStreamFunc = (stream: Duplex) => void;
/**
 *
 */
export declare type StreamPromiseBuilder<T> = (callback: SetStreamFunc) => Promise<T>;
/**
 *
 */
export declare class StreamPromise<T> extends Promise<T> {
    stream(): Duplex;
    static create<T>(asyncFn: StreamPromiseBuilder<T>): StreamPromise<T>;
}
export {};
