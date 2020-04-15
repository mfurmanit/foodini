import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ActionBarComponent } from '~/app/components/action-bar/action-bar.component';
import { RequestInterceptor } from '~/app/others/request-interceptor.service';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        ActionBarComponent,
        RecipesListComponent,
        RecipeDetailsComponent
    ],
    providers: [JsonPipe,
        {
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
