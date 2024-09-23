import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private userID = 'uPifQHKmgtSrflu4Q'; // Replace with your EmailJS user ID

  constructor() {
    emailjs.init(this.userID);
  }

  sendEmailContactUs(templateParams: any) {
    
    return emailjs.send(
      'service_zm6lsd6', // Replace with your EmailJS service ID
      'template_vxc8vrj', // Replace with your EmailJS template ID
      templateParams
    );
  }

  sendEmailEnglishCourses(templateParams: any) {
    
    return emailjs.send(
      'service_zm6lsd6', // Replace with your EmailJS service ID
      'template_70tnt7b', // Replace with your EmailJS template ID
      templateParams
    );
  }

  sendGeneralServices(templateParams: any) {
    
    return emailjs.send(
      'service_zm6lsd6', // Replace with your EmailJS service ID
      'template_vxc8vrj', // Replace with your EmailJS template ID
      templateParams
    );
  }
}

