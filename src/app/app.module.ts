import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IfScreenSizeDirective } from './shared/directives/if-screen-size.directive';
import { NavComponent } from './shared/components/nav/nav.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        IfScreenSizeDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
