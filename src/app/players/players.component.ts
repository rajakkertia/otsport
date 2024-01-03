import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  @Input() footballers: any[] = [];
  @Input() selectedFootballer: any;
  @Output() selectFootballer = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
