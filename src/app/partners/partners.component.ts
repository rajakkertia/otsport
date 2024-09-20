import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  partners:any;

  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
    // https://admin.otsportmanagement.com/getPartnersData
    this._http.get('/assets/partnersData.json').subscribe((res)=>{
      this.partners = res;
    })
  }

}
