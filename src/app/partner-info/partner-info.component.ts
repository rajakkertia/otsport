import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-partner-info',
  templateUrl: './partner-info.component.html',
  styleUrls: ['./partner-info.component.scss']
})
export class PartnerInfoComponent implements OnInit {
  

  @Input() partnerInfo:any
  id?:any;

  constructor(private _http:HttpClient, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe((params)=>{
      this.id = params['id'];
    })

     this._http.get('http://admin.otsportmanagement.com/api/partner/'+this.id).subscribe((res)=>{
      console.log(res)
     })
    
  }

}
