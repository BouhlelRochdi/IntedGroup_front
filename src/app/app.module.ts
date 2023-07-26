import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EFFECTS, REDUCERS } from './store';
import { ServicesProviders } from './core/constants/service_providers.constants';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { jwtInterceptorProvider } from './core/interceptors/jwt.interceptor';
import { DialogManagerComponent } from './features/containers/dialog-manager/dialog-manager.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { CommentAgentComponent } from './features/components/views/comment-agent/comment-agent.component';
@NgModule({
  declarations: [
    AppComponent,
    DialogManagerComponent
  ],
  imports: [
    CommonModule, DialogModule, ButtonModule, DropdownModule, CommentAgentComponent,


    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(REDUCERS),
    EffectsModule.forRoot(EFFECTS),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      trace: false,
    }),

  ],
  providers: [...ServicesProviders, jwtInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
