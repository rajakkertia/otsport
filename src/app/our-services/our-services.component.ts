import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  serviceList = ["GAME_VIDEO_ANALYTICS", "CAREER_PLANNING","INDIVIDUAL_DEVELOPMENT_PROGRAM","LANGUAGE_COURSE","NUTRITION","PHYSICAL_TRAINING","WORK_ON_TRANSFER","SPORTS_PSYCHOLOGY"] ;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goToDetails(id:number){

    this._router.navigateByUrl('/service/'+id);

  }
}
