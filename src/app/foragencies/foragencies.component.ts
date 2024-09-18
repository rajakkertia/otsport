import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-foragencies',
  templateUrl: './foragencies.component.html',
  styleUrls: ['./foragencies.component.scss'],
})
export class ForagenciesComponent implements OnInit {
  @ViewChild('aboutus') aboutUsElement: ElementRef | undefined;

  menuClass = "menu";

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

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
    if (sect === "partners"){
      this.menuClass = "menuPartners";
    }
    else{
      this.menuClass = "menu"
    }

  }

  // aboutUs() {
  //   this.router.navigate(['about-us'], { relativeTo: this.route });
  // }
  partners() {
    this.router.navigate(['partners'], { relativeTo: this.route });
  }
  projects() {
    this.router.navigate(['our-projects'], { relativeTo: this.route });
  }
}
