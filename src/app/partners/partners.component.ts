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
    this._http.get('https://admin.otsportmanagement.com/getPartnersData').subscribe((res)=>{
      this.partners = res;
    })
  }

}
