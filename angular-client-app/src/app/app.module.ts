import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ColorDetailComponent }  from './color-detail/color-detail.component';
import { ColorsComponent }      from './colors/colors.component';
import { MessagesComponent }    from './messages/messages.component';
import {OAuthModule} from 'angular-oauth2-oidc';
import { LogoutComponent } from './logout/logout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:8085/api'],
        sendAccessToken: true
      }
    }),
    NgbModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ColorsComponent,
    ColorDetailComponent,
    MessagesComponent,
    LogoutComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
