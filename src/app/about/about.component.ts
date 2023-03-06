import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';
import { EventService } from '../shared/services/event-service.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnDestroy, OnInit {
    public environment = environment;

    public displayEmulator = false;
    private logoHidden = true;

    public roles = ['Software engineer', 'Web developer', 'Full-stack developer'];
    public summary = 'I design and build software.\nI get stuff done on both the UI and backend.';
    public about = 'I\'m a software engineer from England with almost a decade of experience building applications ' +
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
    public interests = 'I love travelling and exploring new places, I\'m a Liverpool FC and Boston Celtics supporter, ' +
        'and of course I play a healthy dose of videogames.';

    constructor(public eventService: EventService) { }

    ngOnInit(): void {
        this.hideLogo();
    }

    private hideLogo(): void {
        document.getElementById('brand-logo')!.style.opacity = '0';
        document.getElementById('about')!.classList.add('hidden');

        this.logoHidden = true;
    }

    private showLogo(): void {
        document.getElementById('brand-logo')!.style.opacity = '1';
        document.getElementById('about')!.classList.remove('hidden');

        this.logoHidden = false;
    }

    public showEmulator(): void {
        document.body.style.setProperty('overflow', 'hidden');

        this.displayEmulator = true;
    }

    public closeEmulator(): void {
        document.body.style.removeProperty('overflow');

        this.displayEmulator = false;
    }

    // On mobile devices only display the logo when the window isn't scrolled to the top.
    @HostListener('window:scroll', ['$event'])
    onScroll(): void {
        if (window.pageYOffset <= 40) {
            this.hideLogo();
        } else if (this.logoHidden) {
            this.showLogo();
        }
    }

    ngOnDestroy(): void {
        // Reset the logo to be visible.
        if (this.logoHidden) {
            document.getElementById('brand-logo')!.style.opacity = '1';
        }
    }
}
