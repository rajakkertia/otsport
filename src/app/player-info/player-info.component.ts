import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit {

  @Input() selectedFootballer: any;
  @Output() goBack = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
