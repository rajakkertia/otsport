import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-partner-info',
  templateUrl: './partner-info.component.html',
  styleUrls: ['./partner-info.component.scss']
})
export class PartnerInfoComponent implements OnInit {
  

  // @Input() partnerInfo:any
  id?:any;
  partnerInfo:any;
  images = [];
  trustedUrl :any ;

  constructor(private _http:HttpClient, private _activatedRoute: ActivatedRoute, private _router:Router, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe((params)=>{
      this.id = params['id'];
    })

     this._http.get('http://admin.otsportmanagement.com/api/partner/'+this.id).subscribe((res)=>{
     this.partnerInfo = res;
     this.images = this.partnerInfo.images.split(';'); 
     this.trustedUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.partnerInfo.youtube);
     })
  }

  goBack(){
    this._router.navigate(['/partners'])
  }

}
