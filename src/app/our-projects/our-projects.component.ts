import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.scss'],
})
export class OurProjectsComponent implements OnInit {
  projectList = [
    {
      name: 'Project 1',
      text: 'erti sollicitudin, quam non convallis sodales, arcu justo consectetur tellus, nec elementum lectus nunc a risus. Aliquam orci velit, lacinia tempor arcu id, pretium tincidunt massa. Proin mattis vulputate auctor. Curabitur tortor tortor, ultricies consectetur nulla consequat, hendrerit lobortis ex. Mauris iaculis, eros eget scelerisque dignissim, turpis dolor gravida orci, quis tincidunt quam diam at dolor. Proin imperdiet euismod purus vulputate sodales. Duis facilisis leo vel venenatis consequat. Sed vestibulum, lorem ac fringilla vestibulum, nibh tellus fermentum sapien, eu congue quam urna ac ligula. Aliquam vel eros nec urna semper tincidunt nec et ligula. Suspendisse ultricies leo sed magna pellentesque, vel pharetra lectus consequat. In finibus libero non est pharetra, quis mollis est eleifend. Nulla pharetra lacus nec arcu semper fermentum. Nunc at pellentesque elit. Fusce sollicitudin ultrices augue, vel feugiat justo porttitor vitae. Aenean feugiat auctor dignissim. Sed suscipit, leo vitae varius interdum, nulla massa efficitur tellus, lobortis lobortis quam est vitae arcu.\nCras leo est, elementum et condimentum non, feugiat eget turpis. Nam non augue eget sapien porttitor scelerisque id a odio. Nunc accumsan tristique euismod. Vivamus vestibulum bibendum quam. Nulla quis suscipit urna. In non ante ultrices, porttitor dui sit amet, dapibus quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus a mi imperdiet eleifend. Etiam pellentesque metus ut eros cursus rhoncus. Curabitur lacinia, mi ac rutrum fringilla, libero justo ultrices turpis, sed ullamcorper lorem ex sit amet eros. Quisque metus turpis, vehicula sed nunc et, volutpat accumsan velit. Etiam eu condimentum ex. Cras non neque id elit euismod viverra. Proin sed rhoncus turpis, non tincidunt ligula. Nam eleifend sagittis consequat.',
      pictures: ['../../assets/proj1.png', '../../assets/partner.png'],
      youtube: 'https://www.youtube.com/embed/emXsWr9XbZc',
    },
    {
      name: 'Project 2',
      text: 'ori sollicitudin, quam non convallis sodales, arcu justo consectetur tellus, nec elementum lectus nunc a risus. Aliquam orci velit, lacinia tempor arcu id, pretium tincidunt massa. Proin mattis vulputate auctor. Curabitur tortor tortor, ultricies consectetur nulla consequat, hendrerit lobortis ex. Mauris iaculis, eros eget scelerisque dignissim, turpis dolor gravida orci, quis tincidunt quam diam at dolor. Proin imperdiet euismod purus vulputate sodales. Duis facilisis leo vel venenatis consequat. Sed vestibulum, lorem ac fringilla vestibulum, nibh tellus fermentum sapien, eu congue quam urna ac ligula. Aliquam vel eros nec urna semper tincidunt nec et ligula. Suspendisse ultricies leo sed magna pellentesque, vel pharetra lectus consequat. In finibus libero non est pharetra, quis mollis est eleifend. Nulla pharetra lacus nec arcu semper fermentum. Nunc at pellentesque elit. Fusce sollicitudin ultrices augue, vel feugiat justo porttitor vitae. Aenean feugiat auctor dignissim. Sed suscipit, leo vitae varius interdum, nulla massa efficitur tellus, lobortis lobortis quam est vitae arcu.\nCras leo est, elementum et condimentum non, feugiat eget turpis. Nam non augue eget sapien porttitor scelerisque id a odio. Nunc accumsan tristique euismod. Vivamus vestibulum bibendum quam. Nulla quis suscipit urna. In non ante ultrices, porttitor dui sit amet, dapibus quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus a mi imperdiet eleifend. Etiam pellentesque metus ut eros cursus rhoncus. Curabitur lacinia, mi ac rutrum fringilla, libero justo ultrices turpis, sed ullamcorper lorem ex sit amet eros. Quisque metus turpis, vehicula sed nunc et, volutpat accumsan velit. Etiam eu condimentum ex. Cras non neque id elit euismod viverra. Proin sed rhoncus turpis, non tincidunt ligula. Nam eleifend sagittis consequat.',
      pictures: ['../../assets/proj1.png', '../../assets/proj2.png'],
      youtube: 'https://www.youtube.com/embed/emXsWr9XbZc',
    },
    {
      name: 'Project 3',
      text: 'sami sollicitudin, quam non convallis sodales, arcu justo consectetur tellus, nec elementum lectus nunc a risus. Aliquam orci velit, lacinia tempor arcu id, pretium tincidunt massa. Proin mattis vulputate auctor. Curabitur tortor tortor, ultricies consectetur nulla consequat, hendrerit lobortis ex. Mauris iaculis, eros eget scelerisque dignissim, turpis dolor gravida orci, quis tincidunt quam diam at dolor. Proin imperdiet euismod purus vulputate sodales. Duis facilisis leo vel venenatis consequat. Sed vestibulum, lorem ac fringilla vestibulum, nibh tellus fermentum sapien, eu congue quam urna ac ligula. Aliquam vel eros nec urna semper tincidunt nec et ligula. Suspendisse ultricies leo sed magna pellentesque, vel pharetra lectus consequat. In finibus libero non est pharetra, quis mollis est eleifend. Nulla pharetra lacus nec arcu semper fermentum. Nunc at pellentesque elit. Fusce sollicitudin ultrices augue, vel feugiat justo porttitor vitae. Aenean feugiat auctor dignissim. Sed suscipit, leo vitae varius interdum, nulla massa efficitur tellus, lobortis lobortis quam est vitae arcu.\nCras leo est, elementum et condimentum non, feugiat eget turpis. Nam non augue eget sapien porttitor scelerisque id a odio. Nunc accumsan tristique euismod. Vivamus vestibulum bibendum quam. Nulla quis suscipit urna. In non ante ultrices, porttitor dui sit amet, dapibus quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus a mi imperdiet eleifend. Etiam pellentesque metus ut eros cursus rhoncus. Curabitur lacinia, mi ac rutrum fringilla, libero justo ultrices turpis, sed ullamcorper lorem ex sit amet eros. Quisque metus turpis, vehicula sed nunc et, volutpat accumsan velit. Etiam eu condimentum ex. Cras non neque id elit euismod viverra. Proin sed rhoncus turpis, non tincidunt ligula. Nam eleifend sagittis consequat.',
      pictures: ['../../assets/partner.png', '../../assets/proj2.png'],
      youtube: 'https://www.youtube.com/embed/emXsWr9XbZc',
    },
  ];
  currentIndex: number = 0;
  constructor( ) {}

  ngOnInit(): void {
  }

 showNextItem() {
    if (this.currentIndex < this.projectList.length - 1) {
      this.currentIndex++;
    }
  }

  showPreviousItem() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
