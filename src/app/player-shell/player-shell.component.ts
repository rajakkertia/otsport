import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-shell',
  templateUrl: './player-shell.component.html',
  styleUrls: ['./player-shell.component.scss'],
})
export class PlayerShellComponent implements OnInit {
  footballers: any;
  selectedFootballer: any;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get(
      'http://admin.otsportmanagement.com/getPlayersData'
    ).subscribe((res)=>{
      this.footballers = res;
    });

  }

  onSelectFootballer(footballer: any) {
    console.log(footballer)
    this.selectedFootballer = footballer;
  }

  onGoBack() {
    this.selectedFootballer = null;
  }
}
