import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../contact-us/email.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss'],
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

  footballers: any;
  selectedFootballer: any;


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _emailService: EmailService,
    private _http: HttpClient
  ) {
    this._activatedRoute.params.subscribe((params) => {
      this.id = params['id'];

      if (this.id == 1) {
        this.serviceName = 'GAME_VIDEO_ANALYTICS';
      }
      if (this.id == 2) {
        this.serviceName = 'CAREER_PLANNING';
        this.description = 'ONLY_FOR_OUR_PLAYERS';
      }
      if (this.id == 3) {
        this.serviceName = 'INDIVIDUAL_DEVELOPMENT_PROGRAM';
        this.description = 'ONLY_FOR_OUR_PLAYERS';
      }
      if (this.id == 4) {
        this.serviceName = 'LANGUAGE_COURSE';
        this.description = 'LANGUAGE_COURSE_DESCRIPTION';
        this.teacher = 'LANGUAGE_COURSE_TEACHER';
      }
      if (this.id == 5) {
        this.serviceName = 'NUTRITION';
      }
      if (this.id == 6) {
        this.serviceName = 'PHYSICAL_TRAINING';
      }
      if (this.id == 7) {
        this.serviceName = 'WORK_ON_TRANSFER';
        this.description = 'ONLY_FOR_OUR_PLAYERS';
      }
      if (this.id == 8) {
        this.serviceName = 'SPORTS_PSYCHOLOGY';
      }
    });
  }



  ngOnInit(): void {
    this._http.get("/assets/playerData.json").subscribe((res) => {
      this.footballers = res;
      this.selectedFootballer = this.footballers[0];
    });
  }

  onSelectFootballer(footballer: any) {
    console.log(footballer);
    this.selectedFootballer = footballer;
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

  sendVideoNutritionTraining() {
    const formData = {
      full_name: this.fullName,
      service: this.serviceName,
      phone_number: this.phoneNumber,
      reply_to: this.email,
      dob: this.dob,
      team: this.footballClub,
      u_team: this.uTeams,
    };

    this._emailService.sendGeneralServices(formData).then(
      (response) => {
        this.clearForm();
      },
      (error) => {
        alert('Failed to send email.');
      }
    );
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
