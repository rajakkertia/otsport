import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit, OnChanges {

  @Input() selectedFootballer: any;
  @Output() goBack = new EventEmitter<void>();

  imageArray = [];

  
  constructor() { }
  
  linksArray :string | undefined;
  
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['selectedFootballer']){
        const currentValue = changes['selectedFootballer'].currentValue;
        this.imageArray = currentValue.images.split(' ');
      }
  }

}
