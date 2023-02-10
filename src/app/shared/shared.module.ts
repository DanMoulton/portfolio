import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GameEmulatorComponent } from './components/game-emulator/game-emulator.component';
import { TypingAnimationDirective } from './directives/typing-animation.directive';

@NgModule({
    declarations: [
        GameEmulatorComponent,
        TypingAnimationDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        GameEmulatorComponent,
        TypingAnimationDirective
    ]
})
export class SharedModule { }
