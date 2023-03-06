import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgsRevealConfig } from 'ngx-scrollreveal';

import { EventService } from './shared/services/event-service.service';
import ParticlesConfig from './../assets/scripts/particles/particles.json';

declare let particlesJS: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private splashScreenHasRendered = false;

    ngOnInit(): void {
        particlesJS('particles-js', ParticlesConfig, null);

        this.router.events.subscribe(event => {
            if (!this.splashScreenHasRendered && event instanceof NavigationEnd) {
                if (event.url === '/about') {
                    document.body.style.setProperty('overflow', 'hidden');
                    
                    this.eventService.splashScreenActive = true;
                } else {
                    this.eventService.splashScreenActive = false;
                }
            }
        });
    }

    constructor(private router: Router, private scrollRevealConfig: NgsRevealConfig, public eventService: EventService) {
        scrollRevealConfig.reset = false;
        scrollRevealConfig.duration = 600;
    }

    public splashScreenAnimationEnd(): void {
        document.body.style.removeProperty('overflow');

        this.eventService.splashScreenActive = false;
        this.splashScreenHasRendered = true;
    }
}
