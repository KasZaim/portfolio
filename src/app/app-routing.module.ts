import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';

const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'main-page', component:MainPageComponent},
  {path:'about-me', component:AboutMeComponent},
  {path:'skills', component:SkillsComponent},
  {path:'portfolio-section', component:PortfolioSectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
