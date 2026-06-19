import { Component, HostListener, signal } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

interface NavSection {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  protected readonly sections: NavSection[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  protected readonly activeSection = signal('home');
  protected readonly menuOpen = signal(false);

  constructor(private readonly scroll: ScrollService) {}

  @HostListener('window:scroll')
  protected onScroll(): void {
    const position = window.scrollY + 200;
    for (const section of this.sections) {
      const el = document.getElementById(section.id);
      if (el && position >= el.offsetTop && position < el.offsetTop + el.offsetHeight) {
        this.activeSection.set(section.id);
        break;
      }
    }
  }

  protected goTo(id: string): void {
    this.activeSection.set(id);
    this.scroll.scrollToSection(id);
    this.menuOpen.set(false);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
