import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IfScreenSizeDirective } from './directives/if-screen-size.directive';
import { NavComponent } from './components/nav/nav.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        NavComponent,
        SplashScreenComponent,
        IfScreenSizeDirective
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        RouterModule,
        FooterComponent,
        HeaderComponent,
        NavComponent,
        SplashScreenComponent,
        IfScreenSizeDirective
    ]
})
export class CoreModule { }
