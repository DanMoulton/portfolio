import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgsRevealConfig } from 'ngx-scrollreveal';

import ParticlesConfig from './../assets/scripts/particles/particles.json';

declare let particlesJS: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public splashScreenActive = true;
    private splashScreenHasRendered = false;

    ngOnInit(): void {
        particlesJS('particles-js', ParticlesConfig, null);

        this.router.events.subscribe(event => {
            if (!this.splashScreenHasRendered && event instanceof NavigationEnd) {
                document.body.style.setProperty('overflow', 'hidden');
                    
                this.splashScreenActive = true;
            }
        });
    }

    constructor(private router: Router, private scrollRevealConfig: NgsRevealConfig) {
        scrollRevealConfig.reset = false;
        scrollRevealConfig.duration = 600;
    }

    public splashScreenAnimationEnd(): void {
        document.body.style.removeProperty('overflow');

        this.splashScreenActive = false;
        this.splashScreenHasRendered = true;
    }
}
