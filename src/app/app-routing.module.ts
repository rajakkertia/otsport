import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForclubsComponent } from './forclubs/forclubs.component';
import { ForplayersComponent } from './forplayers/forplayers.component';
import { ForagenciesComponent } from './foragencies/foragencies.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'for-clubs', component: ForclubsComponent},
  { path: 'for-players', component: ForplayersComponent},
  { path: 'for-agencies', component: ForagenciesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
