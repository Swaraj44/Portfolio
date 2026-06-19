import { Component } from '@angular/core';
import { SKILLS } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  protected readonly skills = SKILLS;
}
