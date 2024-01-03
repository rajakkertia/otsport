import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  serviceList = ["Game Video Analytics", "Career Planning","individual development program","language course","nutrition","physical training","work on transfer"] ;

  constructor() { }

  ngOnInit(): void {
  }

}
