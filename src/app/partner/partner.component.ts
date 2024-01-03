import { Component, Input, OnInit } from '@angular/core';
import { Partner } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
})
export class PartnerComponent implements OnInit {
  @Input() partner?: Partner;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    console.log(this.partner)
  }

  seeMore(){
    this._router.navigateByUrl('/partner/'+this.partner?._id);
   }
}
