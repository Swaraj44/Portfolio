import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';
import { STATS } from '../../data/portfolio.data';
import { Stat } from '../../models/stat.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  protected readonly profile = PROFILE;
  protected readonly stats: Stat[] = STATS;
}
