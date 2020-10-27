/// <reference types="node" />
import { Duplex } from 'stream';
import { HttpRequest, HttpResponse } from '../types';
/**
 *
 */
export default function request(params: HttpRequest, callback: (err: Error | null | undefined, response: HttpResponse, body: string) => any): Duplex;
