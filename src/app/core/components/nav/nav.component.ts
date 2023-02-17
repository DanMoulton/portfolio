import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { EventService } from '../../../shared/services/event-service.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    @ViewChild('blur') blur!: ElementRef;

    public environment = environment;

    public routes: Routes = [];
    private blurHidden = true;

    constructor(private router: Router, private renderer: Renderer2, public eventService: EventService) { }

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

    // On mobile devices only display the header when the window isn't scrolled to the top.
    @HostListener('window:scroll', ['$event'])
    onScroll(): void {
        if (window.pageYOffset <= 10) {
            this.renderer.setStyle(this.blur.nativeElement, 'visibility', 'hidden');

            this.blurHidden = true;
        } else if (this.blurHidden) {
            this.renderer.setStyle(this.blur.nativeElement, 'visibility', 'visible');

            this.blurHidden = false;
        }
    }
}
