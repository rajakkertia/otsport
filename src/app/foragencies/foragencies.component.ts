import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-foragencies',
  templateUrl: './foragencies.component.html',
  styleUrls: ['./foragencies.component.scss'],
})
export class ForagenciesComponent implements OnInit {
  color = '';
  data: any;
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.generatePalette();
  }

  generatePalette() {
    const url = `http://10.166.15.13:3000/getPartners/65030ccc9322ce266dfffa66`;

    const headers = new HttpHeaders({
      'AAccess-Control-Allow-Origin': 'http://localhost:4200',
    });
    this._http.get(url, { headers }).subscribe((response) => {
      try {
        this.data = response;
        console.log(this.data);
      } catch (error) {
        console.log(error);
      }
    });

   
  }
}
