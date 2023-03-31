import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgsRevealModule } from 'ngx-scrollreveal';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CoreModule } from './core/core.module';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        BlogComponent,
        ContactComponent,
        ExperienceComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule,
        NgsRevealModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
