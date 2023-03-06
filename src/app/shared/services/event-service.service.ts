import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EventService {
    public navOpen = false;
    public splashScreenAnimationStarted = false;
    public splashScreenActive = false;
}
