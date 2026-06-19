import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  protected readonly profile = PROFILE;

  constructor(private readonly scroll: ScrollService) {}

  protected goTo(id: string): void {
    this.scroll.scrollToSection(id);
  }
}
