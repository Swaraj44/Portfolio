import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  protected readonly profile = PROFILE;

  protected name = '';
  protected email = '';
  protected message = '';

  protected submit(event: Event): void {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${this.name || 'a visitor'}`);
    const body = encodeURIComponent(`${this.message}\n\n— ${this.name} (${this.email})`);
    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
  }
}
