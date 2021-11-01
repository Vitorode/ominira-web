import { CoursesDetailsArabeComponent } from './Pages/Coursers-Pages/courses-details-arabe/courses-details-arabe.component';
import { CoursesDetailsCriouloComponent } from './Pages/Coursers-Pages/courses-details-crioulo/courses-details-crioulo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionCoursesComponent } from './Compoments/section-Courses/section-Courses.component';
import { SectionTeachersComponent } from './Compoments/section-Teachers/section-Teachers.component';
import { SliderComponent } from './Compoments/slider/slider.component';
import { FooterComponent } from './Layout/Footer/Footer.component';
import { HeaderComponent } from './Layout/header/header.component';
import { AboutComponent } from './Pages/About/About.component';
import { ContactComponent } from './Pages/Contact/Contact.component';
import { CoursesDetailsInglesComponent } from './Pages/Coursers-Pages/courses-details-ingles/courses-details-ingles.component';
import { CoursesDetailsYorubaComponent } from './Pages/Coursers-Pages/courses-details-yoruba/courses-details-yoruba.component';
import { CoursesComponent } from './Pages/Coursers-Pages/Courses/Courses.component';
import { HomeComponent } from './Pages/home/home.component';
import { TeacherDetailsComponent } from './Pages/Teachers-Pages/teacher-details/teacher-details.component';
import { TeachersComponent } from './Pages/Teachers-Pages/Teachers/Teachers.component';
import { CoursesDetailsFonComponent } from './Pages/Coursers-Pages/courses-details-fon/courses-details-fon.component';
import { CoursesDetailsFrancesComponent } from './Pages/Coursers-Pages/courses-details-frances/courses-details-frances.component';
import { CoursesDetailsLatimComponent } from './Pages/Coursers-Pages/courses-details-latim/courses-details-latim.component';
import { TeacherDetailsBelvicComponent } from './Pages/Teachers-Pages/teacher-details-Belvic/teacher-details-Belvic.component';
import { TeacherDetailsCalinComponent } from './Pages/Teachers-Pages/teacher-details-Calin/teacher-details-Calin.component';
import { TeacherDetailsIsabelaComponent } from './Pages/Teachers-Pages/teacher-details-Isabela/teacher-details-Isabela.component';
import { CoursesDetailsEspanholComponent } from './Pages/Coursers-Pages/courses-details-espanhol/courses-details-espanhol.component';
import { TeacherDetailsDannyComponent } from './Pages/Teachers-Pages/teacher-details-Danny/teacher-details-Danny.component';
import { CoursesDetailsKiswahiliComponent } from './Pages/Coursers-Pages/courses-details-kiswahili/courses-details-kiswahili.component';
import { CousesListComponent } from './Pages/Coursers-Pages/couses-list/couses-list.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SliderComponent,
    SectionCoursesComponent,
    SectionTeachersComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent,

    TeachersComponent,
    TeacherDetailsComponent,
    TeacherDetailsCalinComponent,
    TeacherDetailsIsabelaComponent,
    TeacherDetailsBelvicComponent,
    TeacherDetailsDannyComponent,

    CoursesComponent,
    CousesListComponent,
    CoursesDetailsYorubaComponent,
    CoursesDetailsInglesComponent,
    CoursesDetailsCriouloComponent,
    CoursesDetailsArabeComponent,
    CoursesDetailsLatimComponent,
    CoursesDetailsFrancesComponent,
    CoursesDetailsFonComponent,
    CoursesDetailsEspanholComponent,
    CoursesDetailsKiswahiliComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
