import { Component, EventEmitter, Output } from '@angular/core';

import { StateService } from '../../../shared/services/state.service';

@Component({
    selector: 'app-splash-screen',
    templateUrl: './splash-screen.component.html',
    styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent {
    @Output() animationEndEvent = new EventEmitter<void>();

    constructor(public stateService: StateService) { }

    public animationEnd(): void {
        this.animationEndEvent.emit();
    }
}
