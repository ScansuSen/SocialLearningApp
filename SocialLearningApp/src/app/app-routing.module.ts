import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AskComponent } from './ask/ask/ask.component';


import { HomeComponent } from './home/home/home.component';


import { RegisterComponent } from './register/register/register.component';


import { WelcomeComponent } from './welcome/welcome/welcome.component';


const routes: Routes = [





{
  path: 'Anasayfa',
  component: HomeComponent
  },

   
  {
    path:'Kayıt',
component: RegisterComponent
},
{
  path:'Hoşgeldiniz',
component: WelcomeComponent
},

{
  path:'SoruSor',
  component:AskComponent
}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }
