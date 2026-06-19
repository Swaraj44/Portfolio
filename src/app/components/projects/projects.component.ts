import { Component } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  protected readonly projects = PROJECTS;
}
