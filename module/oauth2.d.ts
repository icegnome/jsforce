import Transport from './transport';
import { Optional } from './types';
/**
 * type defs
 */
export declare type OAuth2Config = {
    clientId?: string;
    clientSecret?: string;
    redirectUri?: string;
    loginUrl?: string;
    authzServiceUrl?: string;
    tokenServiceUrl?: string;
    revokeServiceUrl?: string;
    proxyUrl?: string;
    httpProxy?: string;
};
export declare type AuthzRequestParams = {
    scope?: string;
    state?: string;
} & {
    [attr: string]: string;
};
export declare type TokenResponse = {
    id: string;
    access_token: string;
    refresh_token: string;
    instance_url: string;
};
/**
 * OAuth2 class
 */
export default class OAuth2 {
    loginUrl: string;
    authzServiceUrl: string;
    tokenServiceUrl: string;
    revokeServiceUrl: string;
    clientId: Optional<string>;
    clientSecret: Optional<string>;
    redirectUri: Optional<string>;
    _transport: Transport;
    /**
     *
     */
    constructor(config: OAuth2Config);
    /**
     * Get Salesforce OAuth2 authorization page URL to redirect user agent.
     */
    getAuthorizationUrl(params?: AuthzRequestParams): string;
    /**
     * OAuth2 Refresh Token Flow
     */
    refreshToken(refreshToken: string): Promise<TokenResponse>;
    /**
     * OAuth2 Web Server Authentication Flow (Authorization Code)
     * Access Token Request
     */
    requestToken(code: string, params?: {
        [prop: string]: string;
    }): Promise<TokenResponse>;
    /**
     * OAuth2 Username-Password Flow (Resource Owner Password Credentials)
     */
    authenticate(username: string, password: string): Promise<TokenResponse>;
    /**
     * OAuth2 Revoke Session Token
     */
    revokeToken(token: string): Promise<void>;
    /**
     * @private
     */
    _postParams(params: {
        [name: string]: string;
    }): Promise<any>;
}
