import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { StateService } from '../../../shared/services/state.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit, OnInit {
    @ViewChild('blur') blurElement!: ElementRef;
    @ViewChild('logo') logoElement!: ElementRef;

    public environment = environment;

    public routes: Routes = [];
    private blurHidden = true;

    constructor(private router: Router, private renderer: Renderer2, public stateService: StateService) { }

    ngOnInit(): void {
        this.getRoutes(this.router.config);
    }

    ngAfterViewInit(): void {
        this.stateService.getLogoVisibilityState$.subscribe((visibility) => {
            if (visibility) {
                this.renderer.setStyle(this.logoElement.nativeElement, 'opacity', '1');
            } else {
                this.renderer.setStyle(this.logoElement.nativeElement, 'opacity', '0');
            }
        });
    }

    private getRoutes(routes: Routes): void {
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].path && !routes[i]?.path?.startsWith('*')) {
                this.routes.push(routes[i]);
            }
        }
    }

    public toggleNav(): void {
        if (this.stateService.navOpen) {
            this.hideNav();
        } else {
            this.showNav();
        }
    }

    public hideNav(): void {
        document.body.style.removeProperty('overflow');

        this.stateService.navOpen = false;
    }

    private showNav(): void {
        document.body.style.setProperty('overflow', 'hidden');

        this.stateService.navOpen = true;
    }

    // On mobile devices only display the header when the window isn't scrolled to the top.
    @HostListener('window:scroll', ['$event'])
    onScroll(): void {
        if (window.pageYOffset <= 10) {
            this.renderer.setStyle(this.blurElement.nativeElement, 'visibility', 'hidden');

            this.blurHidden = true;
        } else if (this.blurHidden) {
            this.renderer.setStyle(this.blurElement.nativeElement, 'visibility', 'visible');

            this.blurHidden = false;
        }
    }
}
