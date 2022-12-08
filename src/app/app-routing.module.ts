import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { StringComponent } from './string/string.component';

const routes: Routes = [
// {
//     path: 'login',
//     // loadChildren: () => import('./parent/parent.module').then(m => m.ParentModule)
//     component: FirstComponent
//   },
  { path: '', pathMatch: 'full',component: FirstComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'string', component: StringComponent},
  { path: '', component: DashboardComponent,
children: [
  { path: 'home', component: HomeComponent , data: {animation: 'Home'} },
  { path: 'about', component: AboutComponent , data: {animation: 'About'} },
  { path: 'contact', component: ContactComponent , data: {animation: 'Contact'} },
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
