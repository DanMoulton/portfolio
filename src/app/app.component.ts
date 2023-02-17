import { Component, OnInit } from '@angular/core';
import { NgsRevealConfig } from 'ngx-scrollreveal';

import ParticlesConfig from './../assets/scripts/particles/particles.json';

declare let particlesJS: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        particlesJS('particles-js', ParticlesConfig, null);
    }

    constructor(private scrollRevealConfig: NgsRevealConfig) {
        scrollRevealConfig.reset = false;
        scrollRevealConfig.duration = 600;
    }
}
