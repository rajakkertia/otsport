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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
