import { Injectable, NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
        title: 'About'
    },
    {
        path: 'experience',
        component: ExperienceComponent,
        title: 'Experience'
    },
    {
        path: 'blog',
        component: BlogComponent,
        title: 'Blog'
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact'
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
    constructor(private title: Title) {
        super();
    }

    override updateTitle(routerState: RouterStateSnapshot) {
        const title = this.buildTitle(routerState);

        if (title !== undefined) {
            this.title.setTitle(`Dan M | ${title}`);
        } else {
            this.title.setTitle('Dan M');
        }
    }
}

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
    providers: [
        { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
    ]
})
export class AppRoutingModule { }
