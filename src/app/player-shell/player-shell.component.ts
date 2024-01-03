import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-shell',
  templateUrl: './player-shell.component.html',
  styleUrls: ['./player-shell.component.scss'],
})
export class PlayerShellComponent implements OnInit {
  footballers: any;
  // footballers = [
  //   {
  //     name: 'Player 1',
  //     position: 'Forward',
  //     avatarUrl:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TL06N1QOsi4F2MXuowJ4H__sWmHTGOcy-l3rqxiwQZzHJi89XUptFM5hew_CoymH6xY&usqp=CAU',
  //     pictures: [],
  //     info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolorum sed? Reprehenderit nisi porro nostrum a doloribus iure voluptas sunt! Dolore repellat sed totam incidunt, tempora ab iusto ipsa vitae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolorum sed? Reprehenderit nisi porro nostrum a doloribus iure voluptas sunt! Dolore repellat sed totam incidunt, tempora ab iusto ipsa vitae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolorum sed? Reprehenderit nisi porro nostrum a doloribus iure voluptas sunt! Dolore repellat sed totam incidunt, tempora ab iusto ipsa vitae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolorum sed? Reprehenderit nisi porro nostrum a doloribus iure voluptas sunt! Dolore repellat sed totam incidunt, tempora ab iusto ipsa vitae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolorum sed? Reprehenderit nisi porro nostrum a doloribus iure voluptas sunt! Dolore repellat sed totam incidunt, tempora ab iusto ipsa vitae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolorum sed? Reprehenderit nisi porro nostrum a doloribus iure voluptas sunt! Dolore repellat sed totam incidunt, tempora ab iusto ipsa vitae?',
  //     videoUrl: 'https://www.youtube.com/embed/emXsWr9XbZc',
  //   },
  //   {
  //     name: 'Player 2',
  //     position: 'Midfielder',
  //     avatarUrl:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TL06N1QOsi4F2MXuowJ4H__sWmHTGOcy-l3rqxiwQZzHJi89XUptFM5hew_CoymH6xY&usqp=CAU',
  //     pictures: [],
  //     info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolorum sed? Reprehenderit nisi porro nostrum a doloribus iure voluptas sunt! Dolore repellat sed totam incidunt, tempora ab iusto ipsa vitae?',
  //     videoUrl: 'https://www.youtube.com/embed/emXsWr9XbZc',
  //   },
  //   {
  //     name: 'Player 3',
  //     position: 'Defender',
  //     avatarUrl:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TL06N1QOsi4F2MXuowJ4H__sWmHTGOcy-l3rqxiwQZzHJi89XUptFM5hew_CoymH6xY&usqp=CAU',
  //     pictures: [],
  //     info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolorum sed? Reprehenderit nisi porro nostrum a doloribus iure voluptas sunt! Dolore repellat sed totam incidunt, tempora ab iusto ipsa vitae?',
  //     videoUrl: 'https://www.youtube.com/embed/emXsWr9XbZc',
  //   },
  //   // Add more footballers as needed
  // ];

  selectedFootballer: any;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get(
      'http://admin.otsportmanagement.com/getPlayersData'
    ).subscribe((res)=>{
      this.footballers = res;
      console.log(this.footballers)
    });

  }

  onSelectFootballer(footballer: any) {
    this.selectedFootballer = footballer;
  }

  onGoBack() {
    this.selectedFootballer = null;
  }
}
