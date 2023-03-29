import { Component } from '@angular/core';

import { environment } from '../../environments/environment';
import { StateService } from '../shared/services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public environment = environment;
    public roles = ['Software engineer', 'Web developer', 'Full-stack developer'];
    public summary = 'I design and build software.\nI get stuff done on both the UI and backend.';

    constructor(public stateService: StateService) { }
}
