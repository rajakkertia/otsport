import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { ForclubsComponent } from './forclubs/forclubs.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForagenciesComponent } from './foragencies/foragencies.component';
import { LanguageItemsComponent } from './language-items/language-items.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PartnerComponent } from './partner/partner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PartnersComponent } from './partners/partners.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
import { ForplayersComponent } from './forplayers/forplayers.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { PlayersComponent } from './players/players.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { PlayerShellComponent } from './player-shell/player-shell.component';
import { PartnerInfoComponent } from './partner-info/partner-info.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    AppHeaderComponent,
    ForclubsComponent,
    AppHeaderComponent,
    ForagenciesComponent,
    LanguageItemsComponent,
    AppFooterComponent,
    MainPageComponent,
    PartnerComponent,
    AboutUsComponent,
    PartnersComponent,
    OurProjectsComponent,
    ForplayersComponent,
    OurServicesComponent,
    PlayersComponent,
    PlayerInfoComponent,
    PlayerShellComponent,
    PartnerInfoComponent,
    ImageCarouselComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
