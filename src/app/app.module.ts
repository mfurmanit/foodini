import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from '~/app/others/request-interceptor.service';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon/nativescript-ngx-fonticon';
import { components } from '~/app/components';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        AppRoutingModule,
        CommonModule,
        HttpClientModule,
        TNSFontIconModule.forRoot({
            'mdi': require('~/assets/styles/material-design-icons.css'),
            'fa': require('~/assets/styles/font-awesome.css')
        })
    ],
    declarations: [
        AppComponent,
        components
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true
    }],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
