import { Component } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {

    public environment = environment;

    public displayEmulator = false;
    public roles = ['Software engineer', 'Web developer', 'Full-stack developer'];
    public summary = 'I design and build software.\nI get stuff done on both the UI and backend.';
    public about = 'I\'m a software engineer with almost a decade of experience building applications ' +
        'for companies across many different industries.\n' +
        'I enjoy participating in all stages of software development, from design to implementation, ' +
        'and I love learning new technologies and applying them to interesting projects.';
    public skillsDescription = 'Languages and frameworks I have the most experience with:';
    public skills = [
        {
            iconPath: 'assets/svg/angular-logo.svg',
            name: 'Angular'
        },
        {
            iconPath: 'assets/svg/nodejs-logo.svg',
            name: 'NodeJS'
        },
        {
            iconPath: 'assets/svg/dotnet-logo.svg',
            name: '.NET'
        },
        {
            iconPath: 'assets/svg/java-logo.svg',
            name: 'Java'
        },
        {
            iconPath: 'assets/svg/python-logo.svg',
            name: 'Python'
        },
        {
            iconPath: 'assets/svg/database-icon.svg',
            name: 'SQL and NoSQL'
        }
    ];
    public interests = 'I love travelling and exploring new places, I\'m a Liverpool FC and Boston Celtics supporter, ' +
        'and in my spare time I mainly play videogames.';

    public showEmulator(): void {
        this.displayEmulator = true;
    }
}
