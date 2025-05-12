import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { StateService } from '../shared/services/state.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
    public environment = environment;
    private isScreenSizeSmall = false;
    public roles = [
        'Software engineer',
        'Web developer',
        'Full-stack developer',
    ];
    public summary =
        'I design and build software.\nI get stuff done on both the UI and backend.';

    constructor(
        public stateService: StateService,
        private router: Router
    ) {}

    ngAfterViewInit(): void {
        this.stateService.getScreenSizeSmallState$.subscribe(
            (isScreenSizeSmall) => {
                this.isScreenSizeSmall = isScreenSizeSmall;
            }
        );

        if (this.isScreenSizeSmall) {
            this.router.navigateByUrl('/about');
        }
    }
}
