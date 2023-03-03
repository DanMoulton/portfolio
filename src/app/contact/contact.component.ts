import { Component } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    public environment = environment;

    public contactIntro = 'I\'m always interested in building connections, don\'t hesitate to connect with me on LinkedIn or send me an email.';
    public contactMethods = [
        {
            method: 'LinkedIn',
            icon: 'assets/svgs/linkedin-logo.svg',
            link: environment.linkedInUrl,
            description: 'Dan Moulton'
        },
        {
            method: 'Email',
            icon: 'assets/svgs/email-icon.svg',
            link: environment.email,
            description: environment.email
        }
    ];
}
