import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, Renderer2, ViewChild } from '@angular/core';

import { environment } from '../../environments/environment';
import { StateService } from '../shared/services/state.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnDestroy, AfterViewInit {
    @ViewChild('about') aboutElement!: ElementRef;
    
    public environment = environment;

    private isScreenSizeSmall = false;
    public displayEmulator = false;
    private logoVisible = false;

    public roles = ['Software engineer', 'Web developer', 'Full-stack developer'];
    public summary = 'I design and build software.\nI get stuff done on both the UI and backend.';
    public aboutDescription = 'I\'m a software engineer from England with almost a decade of experience building applications ' +
        'for companies across many different industries.\n' +
        'I enjoy participating in all stages of software development, from design to implementation, ' +
        'and I love learning new technologies and applying them to interesting projects.';
    public skillsDescription = 'Languages and frameworks I have the most experience with:';
    public skills = [
        {
            iconPath: 'assets/svgs/angular-logo.svg',
            name: 'Angular'
        },
        {
            iconPath: 'assets/svgs/nodejs-logo.svg',
            name: 'NodeJS'
        },
        {
            iconPath: 'assets/svgs/dotnet-logo.svg',
            name: '.NET'
        },
        {
            iconPath: 'assets/svgs/java-logo.svg',
            name: 'Java'
        },
        {
            iconPath: 'assets/svgs/python-logo.svg',
            name: 'Python'
        },
        {
            iconPath: 'assets/svgs/database-icon.svg',
            name: 'SQL and NoSQL'
        }
    ];
    public interestsDescription = 'I love travelling and exploring new places, I\'m a Liverpool FC and Boston Celtics supporter, ' +
        'and of course I play a healthy dose of videogames.';

    constructor(private renderer: Renderer2, public stateService: StateService) { }

    ngAfterViewInit(): void {
        this.stateService.getScreenSizeSmallState$.subscribe((isScreenSizeSmall) => {
            this.isScreenSizeSmall = isScreenSizeSmall;
        });

        if (this.isScreenSizeSmall) {
            this.renderer.addClass(this.aboutElement.nativeElement, 'hidden');
            this.stateService.setLogoVisibilityState(false);
        }
    }

    public showEmulator(): void {
        this.renderer.setStyle(document.body, 'overflow', 'hidden');

        this.displayEmulator = true;
    }

    public closeEmulator(): void {
        this.renderer.removeStyle(document.body, 'overflow');

        this.displayEmulator = false;
    }

    // On mobile devices only display the logo when the window isn't scrolled to the top.
    @HostListener('window:scroll', ['$event'])
    onScroll(): void {
        if (this.isScreenSizeSmall) {
            if (window.pageYOffset <= 40) {
                this.renderer.addClass(this.aboutElement.nativeElement, 'hidden');

                this.stateService.setLogoVisibilityState(false);
                this.logoVisible = false;
            } else if (!this.logoVisible) {
                this.renderer.removeClass(this.aboutElement.nativeElement, 'hidden');

                this.stateService.setLogoVisibilityState(true);
                this.logoVisible = true;
            }
        }
    }

    ngOnDestroy(): void {
        // Reset the logo to be visible.
        if (this.isScreenSizeSmall) {
            if (!this.logoVisible) {
                this.stateService.setLogoVisibilityState(true);
            }
        }
    }
}
