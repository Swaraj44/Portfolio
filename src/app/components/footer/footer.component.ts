import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}
