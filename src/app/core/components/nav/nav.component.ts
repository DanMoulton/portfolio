import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    public environment = environment;
    public navOpen = false;
    public routes: Routes = [];

    constructor(private router: Router) { }

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
}
