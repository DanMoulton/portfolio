import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public environment = environment;

    public routes: Routes = [];

    constructor(private router: Router) { }

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

}
