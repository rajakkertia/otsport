import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../contact-us/email.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {

  serviceName: any;
  description: any;
  teacher: any;
  id?: any;

  fullName: string = '';
  dob: string = ''; // Date of Birth (Date format)
  phoneNumber: string = '';
  email: string = '';
  groupType: string = 'individual'; // Default value for select menu
  beginDate: string = ''; // Date format for Begin Date
  englishLevel: string = '';


  footballClub = '';
  uTeams = '';

  constructor( private _activatedRoute: ActivatedRoute, private _emailService: EmailService) { 
    this._activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      if(this.id == 4){
        this.serviceName = "LANGUAGE_COURSE";
        this.description =  "LANGUAGE_COURSE_DESCRIPTION";
        this.teacher =  "LANGUAGE_COURSE_TEACHER";
      }
      if(this.id == 1){
        this.serviceName = "GAME_VIDEO_ANALYTICS";
      }
      if(this.id == 5){
        this.serviceName = "NUTRITION";
      }
      if(this.id == 6){
        this.serviceName = "PHYSICAL_TRAINING";
      }
    });

  }

  ngOnInit(): void {
   
  }

  sendEglishCourse() {
    const formData = {
      full_name: this.fullName,
      dob: this.dob,
      phone_number: this.phoneNumber,
      reply_to: this.email,
      group_type: this.groupType,
      date_of_beginning: this.beginDate,
      english_level: this.englishLevel,
    };

    this._emailService.sendEmailEnglishCourses(formData).then(
      (response) => {
        this.clearForm();
      },
      (error) => {
        alert('Failed to send email.');
      }
    );
  }

  sendVideoNutritionTraining(){

  }



  // Method to clear form after submission
  clearForm() {
    this.fullName = '';
    this.dob = '';
    this.phoneNumber = '';
    this.email = '';
    this.groupType = 'individual';
    this.beginDate = '';
    this.englishLevel = '';
    this.footballClub = '';
    this.uTeams = '';
  }

}
