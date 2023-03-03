import { Component } from '@angular/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
    public experienceIntro = 'I have an Engineering degree in Computer Science and I\'ve been ' +
        'in the industry since 2014, working on many different projects in different capacities. ' +
        'Below are the places I\'ve worked.';
    public jobs = [
        {
            company: 'Moody\'s Analytics',
            roles: [
                {
                    name: 'Asst. Director - Machine Learning',
                    fromDate: new Date('2022-01').toDateString(),
                    toDate: 'Present',
                    description: 'At Moody\'s I\'ve been leading the UI and backend efforts on ML projects, providing ways for ML engineers to store, ' +
                        'enhance and later extract data. I\'m currently working on financial risks analytics using Angular 15, Python and PostgreSQL.',
                    expanded: false
                },
                {
                    name: 'Senior Software Engineer',
                    fromDate: new Date('2020-11').toDateString(),
                    toDate: new Date('2022-01').toDateString(),
                    description: 'As a Senior Software Engineer I built frontend and API applications from scratch for an ML-driven search and ' +
                        'recommendation system. The UI consists of a custom document annotation tool while the API is used for storing machine-generated ' +
                        'data and user feedback. Technologies used include Angular 12, NodeJS, Python, MySQL, Elasticsearch and RabbitMQ.',
                    expanded: false
                }
            ],
            iconPath: 'assets/images/moodys-logo.jpeg'
        },
        {
            company: 'Kin + Carta',
            roles: [
                {
                    name: 'Senior Software Engineer',
                    fromDate: new Date('2018-12').toDateString(),
                    toDate: new Date('2020-11').toDateString(),
                    description: 'At Kin + Carta I worked on some interesting projects for clients from different industries. These projects include:' +
                        '<ul><li>an event registration system for luxury automotive company using .NET and Angular 7.</li>' +
                        '<li>the re-engineering of a leads-generating system, transforming it into a responsive web app using Angular 8 and Java Springboot.</li>' +
                        '<li>the modernization of a caller verification system for a leading financial services company, built using React and GraphQL.</li></ul>',
                    expanded: false
                }
            ],
            iconPath: 'assets/images/kin-carta-logo.jpeg'
        },
        {
            company: 'Freelance',
            roles: [
                {
                    name: 'Full-Stack Developer',
                    fromDate: new Date('2014-08-01').toDateString(),
                    toDate: new Date('2019-01-01').toDateString(),
                    description: 'As a freelancer I spent time working for an online casino platform building and maintaining ' +
                        'front-end and back-office applications.<br>I was responsible for the development and implementation of new games, services ' +
                        'and APIs using .NET Framework and JavaScript.',
                    expanded: false
                }
            ],
            iconPath: 'assets/svgs/computer-icon.svg'
        }
    ];

    public isDate(value: string): boolean {
        return !isNaN(Date.parse(value));
    }
}
