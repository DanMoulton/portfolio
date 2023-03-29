import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router, Routes } from '@angular/router';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @ViewChild('logo') logoElement!: ElementRef;
    
    public environment = environment;

    public routes: Routes = [];

    constructor(private router: Router, private renderer: Renderer2) { }

    ngOnInit(): void {
        this.getRoutes(this.router.config);

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                if (event.url === '/') {
                    this.renderer.addClass(this.logoElement.nativeElement, 'hidden');
                } else {
                    this.renderer.removeClass(this.logoElement.nativeElement, 'hidden');
                }
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

}
