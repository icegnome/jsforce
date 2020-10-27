/// <reference types="node" />
/**
 * @file Manages query for records in Salesforce
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */
import { EventEmitter } from 'events';
import { Logger } from './util/logger';
import { Serializable } from './record-stream';
import Connection from './connection';
import { QueryConfig as SOQLQueryConfig, SortDir } from './soql-builder';
import { Record, Optional, Schema, SObjectNames, ChildRelationshipNames, ChildRelationshipSObjectName, FieldProjectionConfig, FieldPathSpecifier, FieldPathScopedProjection, SObjectRecord, SObjectInputRecord, SaveResult, DateString, SObjectChildRelationshipProp, SObjectFieldNames } from './types';
import { Readable } from 'stream';
import SfDate from './date';
/**
 *
 */
export declare type QueryField<S extends Schema, N extends SObjectNames<S>, FP extends FieldPathSpecifier<S, N> = FieldPathSpecifier<S, N>> = FP | FP[] | string | string[] | {
    [field: string]: number | boolean;
};
/**
 *
 */
declare type CValue<T> = T extends DateString ? SfDate : T extends string | number | boolean ? T : never;
declare type CondOp<T> = ['$eq', CValue<T> | null] | ['$ne', CValue<T> | null] | ['$gt', CValue<T>] | ['$gte', CValue<T>] | ['$lt', CValue<T>] | ['$lte', CValue<T>] | ['$like', T extends string ? T : never] | ['$nlike', T extends string ? T : never] | ['$in', Array<CValue<T>>] | ['$nin', Array<CValue<T>>] | ['$includes', T extends string ? T[] : never] | ['$excludes', T extends string ? T[] : never] | ['$exists', boolean];
declare type CondValueObj<T, Op = CondOp<T>[0]> = Op extends CondOp<T>[0] ? Op extends string ? {
    [K in Op]: Extract<CondOp<T>, [Op, any]>[1];
} : never : never;
declare type CondValue<T> = CValue<T> | Array<CValue<T>> | null | CondValueObj<T>;
declare type ConditionSet<R extends Record> = {
    [K in keyof R]?: CondValue<R[K]>;
};
export declare type QueryCondition<S extends Schema, N extends SObjectNames<S>> = {
    $or: QueryCondition<S, N>[];
} | {
    $and: QueryCondition<S, N>[];
} | ConditionSet<SObjectRecord<S, N>>;
export declare type QuerySort<S extends Schema, N extends SObjectNames<S>, R extends SObjectRecord<S, N> = SObjectRecord<S, N>> = {
    [K in keyof R]?: SortDir;
} | Array<[keyof R, SortDir]>;
/**
 *
 */
export declare type QueryConfig<S extends Schema, N extends SObjectNames<S>, FP extends FieldPathSpecifier<S, N> = FieldPathSpecifier<S, N>> = {
    fields?: QueryField<S, N, FP>;
    includes?: {
        [CRN in ChildRelationshipNames<S, N>]?: QueryConfig<S, ChildRelationshipSObjectName<S, N, CRN>>;
    };
    table?: string;
    conditions?: QueryCondition<S, N>;
    sort?: QuerySort<S, N>;
    limit?: number;
    offset?: number;
};
export declare type QueryOptions = {
    headers: {
        [name: string]: string;
    };
    maxFetch: number;
    autoFetch: boolean;
    scanAll: boolean;
    responseTarget: QueryResponseTarget;
};
export declare type QueryResult<R extends Record> = {
    done: boolean;
    totalSize: number;
    records: R[];
    nextRecordsUrl?: string;
};
declare const ResponseTargetValues: readonly ["QueryResult", "Records", "SingleRecord", "Count"];
export declare type QueryResponseTarget = typeof ResponseTargetValues[number];
export declare const ResponseTargets: {
    [K in QueryResponseTarget]: K;
};
export declare type QueryResponse<R extends Record, QRT extends QueryResponseTarget = QueryResponseTarget> = QRT extends 'QueryResult' ? QueryResult<R> : QRT extends 'Records' ? R[] : QRT extends 'SingleRecord' ? R | null : number;
export declare type QueryDestroyOptions = {
    allowBulk?: boolean;
    bulkThreshold?: number;
};
export declare type QueryUpdateOptions = {
    allowBulk?: boolean;
    bulkThreshold?: number;
};
/**
 * Query
 */
export default class Query<S extends Schema, N extends SObjectNames<S>, R extends Record = Record, QRT extends QueryResponseTarget = QueryResponseTarget> extends EventEmitter {
    static _logger: Logger;
    _conn: Connection<S>;
    _logger: Logger;
    _soql: Optional<string>;
    _locator: Optional<string>;
    _config: SOQLQueryConfig;
    _children: SubQuery<S, N, R, QRT, any, any, any>[];
    _options: QueryOptions;
    _executed: boolean;
    _finished: boolean;
    _chaining: boolean;
    _promise: Promise<QueryResponse<R, QRT>>;
    _stream: Serializable<R>;
    totalSize: Optional<number>;
    totalFetched: Optional<number>;
    /**
     *
     */
    constructor(conn: Connection<S>, config: string | QueryConfig<S, N> | {
        locator: string;
    }, options?: Partial<QueryOptions>);
    /**
     * Select fields to include in the returning result
     */
    select<R extends Record = Record, FP extends FieldPathSpecifier<S, N> = FieldPathSpecifier<S, N>, FPC extends FieldProjectionConfig = FieldPathScopedProjection<S, N, FP>, R2 extends SObjectRecord<S, N, FPC, R> = SObjectRecord<S, N, FPC, R>>(fields?: QueryField<S, N, FP>): Query<S, N, R2, QRT>;
    /**
     * Set query conditions to filter the result records
     */
    where(conditions: QueryCondition<S, N> | string): this;
    /**
     * Limit the returning result
     */
    limit(limit: number): this;
    /**
     * Skip records
     */
    skip(offset: number): this;
    /**
     * Synonym of Query#skip()
     */
    offset: (offset: number) => this;
    /**
     * Set query sort with direction
     */
    sort(sort: QuerySort<S, N>): this;
    sort(sort: string): this;
    sort(sort: SObjectFieldNames<S, N>, dir: SortDir): this;
    sort(sort: string, dir: SortDir): this;
    /**
     * Synonym of Query#sort()
     */
    orderby: typeof Query.prototype.sort;
    /**
     * Include child relationship query and move down to the child query context
     */
    include<CRN extends ChildRelationshipNames<S, N>, CN extends ChildRelationshipSObjectName<S, N, CRN>, CFP extends FieldPathSpecifier<S, CN> = FieldPathSpecifier<S, CN>, CFPC extends FieldProjectionConfig = FieldPathScopedProjection<S, CN, CFP>, CR extends Record = SObjectRecord<S, CN, CFPC>>(childRelName: CRN, conditions?: Optional<QueryCondition<S, CN>>, fields?: Optional<QueryField<S, CN, CFP>>, options?: {
        limit?: number;
        offset?: number;
        sort?: QuerySort<S, CN>;
    }): SubQuery<S, N, R, QRT, CRN, CN, CR>;
    include<CRN extends ChildRelationshipNames<S, N>, CN extends SObjectNames<S>, CR extends Record = SObjectRecord<S, CN>>(childRelName: string, conditions?: Optional<QueryCondition<S, CN>>, fields?: Optional<QueryField<S, CN>>, options?: {
        limit?: number;
        offset?: number;
        sort?: QuerySort<S, CN>;
    }): SubQuery<S, N, R, QRT, CRN, CN, CR>;
    /**
     * Include child relationship queryies, but not moving down to the children context
     */
    includeChildren(includes: {
        [CRN in ChildRelationshipNames<S, N>]?: QueryConfig<S, ChildRelationshipSObjectName<S, N, CRN>>;
    }): this;
    /**
     * Setting maxFetch query option
     */
    maxFetch(maxFetch: number): this;
    /**
     * Switching auto fetch mode
     */
    autoFetch(autoFetch: boolean): this;
    /**
     * Set flag to scan all records including deleted and archived.
     */
    scanAll(scanAll: boolean): this;
    /**
     *
     */
    setResponseTarget<QRT1 extends QueryResponseTarget>(responseTarget: QRT1): Query<S, N, R, QRT1>;
    /**
     * Execute query and fetch records from server.
     */
    execute<QRT1 extends QueryResponseTarget = QRT>(options_?: Partial<QueryOptions> & {
        responseTarget?: QRT1;
    }): Query<S, N, R, QRT1>;
    /**
     * Synonym of Query#execute()
     */
    exec: <QRT1 extends "Records" | "SingleRecord" | "QueryResult" | "Count" = QRT>(options_?: Partial<QueryOptions> & {
        responseTarget?: QRT1 | undefined;
    }) => Query<S, N, R, QRT1>;
    /**
     * Synonym of Query#execute()
     */
    run: <QRT1 extends "Records" | "SingleRecord" | "QueryResult" | "Count" = QRT>(options_?: Partial<QueryOptions> & {
        responseTarget?: QRT1 | undefined;
    }) => Query<S, N, R, QRT1>;
    /**
     * @private
     */
    _execute(options: QueryOptions): Promise<QueryResponse<R>>;
    /**
     * Obtain readable stream instance
     */
    stream(type: 'record'): Serializable<R>;
    stream(type: 'csv'): Readable;
    /**
     * Pipe the queried records to another stream
     * This is for backward compatibility; Query is not a record stream instance anymore in 2.0.
     * If you want a record stream instance, use `Query#stream('record')`.
     */
    pipe(stream: NodeJS.WritableStream): NodeJS.WritableStream;
    /**
     * @protected
     */
    _expandFields(sobject_?: string): Promise<void>;
    /**
     *
     */
    _findRelationObject(relName: string): Promise<string>;
    /**
     *
     */
    _expandAsteriskFields(sobject: string, fields: string[]): Promise<string[]>;
    /**
     *
     */
    _expandAsteriskField(sobject: string, field: string): Promise<string[]>;
    /**
     * Explain plan for executing query
     */
    explain(): Promise<any>;
    /**
     * Return SOQL expression for the query
     */
    toSOQL(): Promise<string>;
    /**
     * Promise/A+ interface
     * http://promises-aplus.github.io/promises-spec/
     *
     * Delegate to deferred promise, return promise instance for query result
     */
    then<U, V>(onResolve?: ((qr: QueryResponse<R, QRT>) => U | Promise<U>) | null | undefined, onReject?: ((err: Error) => V | Promise<V>) | null | undefined): Promise<U | V>;
    catch(onReject: (err: Error) => QueryResponse<R, QRT> | Promise<QueryResponse<R, QRT>>): Promise<QueryResponse<R, QRT>>;
    promise(): Promise<QueryResponse<R, QRT>>;
    /**
     * Bulk delete queried records
     */
    destroy(options?: QueryDestroyOptions): Promise<SaveResult[]>;
    destroy(type: N, options?: QueryDestroyOptions): Promise<SaveResult[]>;
    /**
     * Synonym of Query#destroy()
     */
    delete: {
        (options?: QueryDestroyOptions | undefined): Promise<SaveResult[]>;
        (type: N, options?: QueryDestroyOptions | undefined): Promise<SaveResult[]>;
    };
    /**
     * Synonym of Query#destroy()
     */
    del: {
        (options?: QueryDestroyOptions | undefined): Promise<SaveResult[]>;
        (type: N, options?: QueryDestroyOptions | undefined): Promise<SaveResult[]>;
    };
    /**
     * Bulk update queried records, using given mapping function/object
     */
    update<UR extends SObjectInputRecord<S, N>>(mapping: ((rec: R) => UR) | UR, type: N, options?: QueryUpdateOptions): Promise<SaveResult[]>;
    update<UR extends SObjectInputRecord<S, N>>(mapping: ((rec: R) => UR) | UR, options?: QueryUpdateOptions): Promise<SaveResult[]>;
}
/**
 * SubQuery object for representing child relationship query
 */
export declare class SubQuery<S extends Schema, PN extends SObjectNames<S>, PR extends Record, PQRT extends QueryResponseTarget, CRN extends ChildRelationshipNames<S, PN> = ChildRelationshipNames<S, PN>, CN extends SObjectNames<S> = ChildRelationshipSObjectName<S, PN, CRN>, CR extends Record = Record> {
    _relName: CRN;
    _query: Query<S, CN, CR>;
    _parent: Query<S, PN, PR, PQRT>;
    /**
     *
     */
    constructor(conn: Connection<S>, relName: CRN, config: QueryConfig<S, CN>, parent: Query<S, PN, PR, PQRT>);
    /**
     *
     */
    select<R extends Record = Record, FP extends FieldPathSpecifier<S, CN> = FieldPathSpecifier<S, CN>, FPC extends FieldProjectionConfig = FieldPathScopedProjection<S, CN, FP>>(fields: QueryField<S, CN, FP>): SubQuery<S, PN, PR, PQRT, CRN, CN, SObjectRecord<S, CN, FPC, R>>;
    /**
     *
     */
    where(conditions: QueryCondition<S, CN> | string): this;
    /**
     * Limit the returning result
     */
    limit(limit: number): this;
    /**
     * Skip records
     */
    skip(offset: number): this;
    /**
     * Synonym of SubQuery#skip()
     */
    offset: (offset: number) => this;
    /**
     * Set query sort with direction
     */
    sort(sort: QuerySort<S, CN>): this;
    sort(sort: string): this;
    sort(sort: SObjectFieldNames<S, CN>, dir: SortDir): this;
    sort(sort: string, dir: SortDir): this;
    /**
     * Synonym of SubQuery#sort()
     */
    orderby: typeof SubQuery.prototype.sort;
    /**
     *
     */
    _expandFields(): Promise<void>;
    /**
     * Back the context to parent query object
     */
    end<CRP extends SObjectChildRelationshipProp<CRN, CR> = SObjectChildRelationshipProp<CRN, CR>, PR1 extends Record = PR & CRP>(): Query<S, PN, PR1, PQRT>;
}
export {};
