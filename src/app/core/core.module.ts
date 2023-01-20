import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IfScreenSizeDirective } from './directives/if-screen-size.directive';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    IfScreenSizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    IfScreenSizeDirective
  ]
})
export class CoreModule { }
