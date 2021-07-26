import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AskModule } from './ask/ask.module';

import { HomeModule } from './home/home.module';
import { LessonsModule } from './lessons/lessons.module';

import { RegisterModule } from './register/register.module';

import { WelcomeModule } from './welcome/welcome.module';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { QuestionState } from './store/states/questions.state';

import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AppLayoutComponent } from './layout/app-layout.component';
import { AnswerState } from './store/states/answer.state';
import { EducationState } from './store/states/education.state';
import { LessonState } from './store/states/lesson.state';

@NgModule({
  declarations: [
   AppComponent,
   AppLayoutComponent,
   SidebarComponent,
   NavbarComponent,
  
  
  ],
  imports: [
    NgxsModule,
    NgxsModule.forRoot([QuestionState, AnswerState, EducationState, LessonState]),
   
  // NgxsStoragePluginModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
   
  
    HomeModule,
    LessonsModule,
   
  
    RegisterModule,
    WelcomeModule,
AskModule,
HttpClientModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
