import { Component, EventEmitter, Output } from '@angular/core';

import { EventService } from '../../../shared/services/event-service.service';

@Component({
    selector: 'app-splash-screen',
    templateUrl: './splash-screen.component.html',
    styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent {
    @Output() animationEndEvent = new EventEmitter<void>();

    constructor(public eventService: EventService) { }

    public animationEnd(): void {
        this.animationEndEvent.emit();
    }
}
