import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    @ViewChild('navContainer') navContainer!: ElementRef;
    @ViewChild('content') content!: ElementRef;

    public environment = environment;

    public navOpen = false;
    public routes: Routes = [];
    private scrollPosition = 0;
    private transitionEndUnlistener!: () => void;

    constructor(private renderer: Renderer2,
        private router: Router, private changeDetectorRef: ChangeDetectorRef) { }

    ngOnInit() {
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
        if (this.navOpen) {
            this.hideNav();
        } else {
            this.showNav();
        }
    }

    // When hiding the nav menu, the scroll position gets restored to how it was before opening the menu.
    // Since there are transitions on the DOM elements, the styling changes need to be applied after the transitions end.
    private hideNav(): void {
        this.transitionEndUnlistener = this.renderer.listen(this.content.nativeElement, 'transitionend', () => {
            this.content.nativeElement.classList.add('no-transition');
            this.content.nativeElement.style.removeProperty('top');
            window.scrollTo(0, this.scrollPosition);
            this.content.nativeElement.classList.remove('no-transition');

            this.transitionEndUnlistener();
        });

        this.navOpen = false;
    }

    // When the nav menu is displayed, #content's position gets set 'position: fixed' to deactivate its scrolling.
    // To avoid jumping to the top of the page, the top property gets set to the previous scroll position.
    private showNav(): void {
        this.scrollPosition = window.pageYOffset;
        this.content.nativeElement.style.top = -this.scrollPosition + 'px';

        this.navContainer.nativeElement.scrollTo(0, 0);

        this.navOpen = true;
    }
}
