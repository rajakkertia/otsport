import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  fullName = '';
  email = '';
  subject = '';
  message = '';

  onSubmit() {
    const formData = {
      fullName: this.fullName,
      email: this.email,
      subject: this.subject,
      message: this.message,
    };

    // Simulate sending form data to a server or API
    console.log('Sending email to info@mysite.com with the following data:', formData);

    // You can integrate an email service like SendGrid or a backend API to send emails
  }

}
