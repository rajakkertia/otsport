import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forplayers',
  templateUrl: './forplayers.component.html',
  styleUrls: ['./forplayers.component.scss']
})
export class ForplayersComponent implements OnInit {

  @ViewChild('aboutus') aboutUsElement: ElementRef | undefined;

  menuClass = "menu";

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  scrollToElement($element: any, sect: string): void {
    console.log($element);
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    // Update the URL when scrolling to About Us section
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { section: sect },
      queryParamsHandling: 'merge',
    });
    if (sect === "ourservices"){
      this.menuClass = "menuServices";
    }
    else{
      this.menuClass = "menu"
    }

  }

  // aboutUs() {
  //   this.router.navigate(['about-us'], { relativeTo: this.route });
  // }
  ourservices() {
    this.router.navigate(['our-services'], { relativeTo: this.route });
  }
  players() {
    this.router.navigate(['players'], { relativeTo: this.route });
  }
  projects() {
    this.router.navigate(['our-projects'], { relativeTo: this.route });
  }


}
