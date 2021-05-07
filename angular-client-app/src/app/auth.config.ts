import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8080/auth/realms/demo-realm',
  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/dashboard',
  clientId: 'demo-angular',
  responseType: 'code',
  strictDiscoveryDocumentValidation: true,
  scope: 'openid email',
  postLogoutRedirectUri: 'http://localhost:4200/logout_success',
  showDebugInformation: true,
  requireHttps: false
}

/** 
export const authConfig: AuthConfig = {
  issuer: 'https://login.microsoftonline.com/<<<tenant_id>>>/v2.0',
  redirectUri: window.location.origin + '/dashboard',
  clientId: '<<<client_id>>>',
  responseType: 'code',
  strictDiscoveryDocumentValidation: false,
  scope: 'openid api://<<<client_id>>>/app',
}
*/