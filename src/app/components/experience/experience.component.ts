import { Component } from '@angular/core';
import { EXPERIENCES } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  protected readonly experiences = EXPERIENCES;
}
