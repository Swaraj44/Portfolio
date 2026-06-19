import { Injectable } from '@angular/core';

/** Smoothly scrolls to a section by element id. */
@Injectable({ providedIn: 'root' })
export class ScrollService {
  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
