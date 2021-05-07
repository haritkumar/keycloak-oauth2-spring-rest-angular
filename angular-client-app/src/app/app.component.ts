import {Component, OnInit} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {authConfig} from './auth.config';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
	title = 'Pelette Colors';

	constructor(private oauthService: OAuthService) {
		this.oauthService.configure(authConfig);
		this.oauthService.tokenValidationHandler = new JwksValidationHandler();
		this.oauthService.loadDiscoveryDocumentAndLogin();
		this.oauthService.setupAutomaticSilentRefresh();
	  }
	ngOnInit(): void {
		console.log(this.oauthService.getIdentityClaims());
	}

	logoffAndRevokeTokens() {
		console.log("logout called");
		//this.oauthService.revokeTokenAndLogout();
		this.oauthService.logOut();
	}
}