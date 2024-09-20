import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ForclubsComponent } from './forclubs/forclubs.component';
import { ForplayersComponent } from './forplayers/forplayers.component';
import { ForagenciesComponent } from './foragencies/foragencies.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PartnersComponent } from './partners/partners.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { PlayersComponent } from './players/players.component';
import { PlayerShellComponent } from './player-shell/player-shell.component';
import { PartnerInfoComponent } from './partner-info/partner-info.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'for-clubs', component: ForclubsComponent},
  { path: 'for-players', component: ForplayersComponent},
  { path: 'for-agencies', component: ForagenciesComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'partners', component: PartnersComponent},
  { path: 'our-projects', component: OurProjectsComponent},
  { path: 'our-services', component: OurServicesComponent},
  { path: 'service/:id', component: ServiceDetailsComponent},
  { path: 'players', component: PlayerShellComponent},
  { path: 'partner/:id', component: PartnerInfoComponent},
  { path: 'video', component: VideoPlayerComponent},
  { path: 'contact-us', component: ContactUsComponent },

  

  {
    path: 'for-clubs',
    component: ForclubsComponent,
    children: [
      { path: '', component: AboutUsComponent },
      // { path: 'about-us', component: AboutUsComponent },
      { path: 'partners', component: PartnersComponent },
      { path: 'our-projects', component: OurProjectsComponent},
    ]
  },
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload' //Must have if you want to be able to use the anchor more than once
};


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
