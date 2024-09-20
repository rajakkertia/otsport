import { Component, OnInit } from '@angular/core';
import { EmailService } from './email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  fullName = '';
  email = '';
  subject = '';
  message = '';

  constructor(private _emailService: EmailService) {}

  sendEmail() {
    const templateParams = {
      from_full_name: this.fullName,
      reply_to: this.email,
      subject: this.subject,
      message: this.message,
    };
    this._emailService.sendEmailContactUs(templateParams).then(
      (response) => {
        this.clearForm();
      },
      (error) => {
        alert('Failed to send email.');
      }
    );
  }

  clearForm() {
    this.fullName = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }
}
