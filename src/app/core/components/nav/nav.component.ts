import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { EventService } from '../../../shared/services/event-service.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    @ViewChild('navContainer') navContainer!: ElementRef;
    @ViewChild('contentContainer') contentContainer!: ElementRef;

    public environment = environment;

    public routes: Routes = [];

    constructor(private router: Router, public eventService: EventService) { }

    ngOnInit(): void {
        this.getRoutes(this.router.config);
    }

    private getRoutes(routes: Routes): void {
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].path && !routes[i]?.path?.startsWith('*')) {
                this.routes.push(routes[i]);
            }
        }
    }

    public toggleNav(): void {
        if (this.eventService.navOpen) {
            this.hideNav();
        } else {
            this.showNav();
        }
    }

    public hideNav(): void {
        document.body.style.removeProperty('overflow');

        this.eventService.navOpen = false;
    }

    private showNav(): void {
        document.body.style.setProperty('overflow', 'hidden');

        this.eventService.navOpen = true;
    }
}
