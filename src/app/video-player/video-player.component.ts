// src/app/video-player/video-player.component.ts

import { Component, ViewChild, ElementRef, OnInit, AfterContentInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  animations: [
    trigger('slideIn', [
      state('void', style({ transform: 'translateX(-100%)' })),
      transition(':enter', animate('500ms ease-in-out')),
    ]),
  ],
})
export class VideoPlayerComponent implements OnInit, AfterContentInit {
  @ViewChild('video') videoElement: ElementRef | undefined;

  videoPath= "../../assets/video.mp4"
  ngOnInit() {
  }

  ngAfterContentInit(): void {
      this.videoElement?.nativeElement.player.play()
  }
}
