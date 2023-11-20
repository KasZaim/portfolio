import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  {path:'', component:MainContentComponent},
  {path:'imprint', component:ImprintComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
