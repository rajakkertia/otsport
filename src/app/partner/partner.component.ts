import { Component, Input, OnInit } from '@angular/core';
import { Partner } from '../models';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
})
export class PartnerComponent implements OnInit {
  @Input() partner?: Partner;

  url = 'https://s3-alpha-sig.figma.com/img/4aa1/cbf6/1385281ebc2a2f0b63d0f157f17c649e?Expires=1695600000&Signature=p5I1XXzS7vHHqPSMmNHXgVvlykb~1XyPqBDz2LxfkfraM6lt6PKLyB1~GCYO~rGHHDRXi68Fp5MPefyH8jeTPZzjp8fxnBY5nZ3vU6akCeb1GZ544JtdPXiNL8nyjoxM3siZlaRu8SI32c8Ql~4xOSDDR1uzI7SfTFSIrfxtT8dY0u6rc8tcJgfQQlfbv225g1yy0CKy4MQOhp51HxeGtMFXFLQgmWOgHXaB1mlFTYhoEl~wDkHyYIWFs5q4dyIBDwVAn5YjLthThj98beqhzY9uBxYb4~YQsEcKEWS2uFP-zCwAhA02KiLphPq82aL2HShE8SRyejW48wVwYsYL4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';
  text = 'Iterpro Sports Intelligence is an all-in-one sports data management platform that connects organization members, centralises technologies and data from every department and turns them into actionable insights to support clubs in making better decisions faster, from the pitch to the board. Iterpro helps sports organizations to build a bespoke digital framework that streamlines communication and workflow across several clubs’ areas, and brings the club’s strategic information right at the fingertips of their decision makers so they can be always in control.'

  constructor() {}

  ngOnInit(): void {}
}
