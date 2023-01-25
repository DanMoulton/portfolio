import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TypingAnimationDirective } from './directives/typing-animation.directive';

@NgModule({
    declarations: [
        TypingAnimationDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TypingAnimationDirective
    ]
})
export class SharedModule { }
