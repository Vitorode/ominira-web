import { CoursesDetailsKiswahiliComponent } from './Pages/Coursers-Pages/courses-details-kiswahili/courses-details-kiswahili.component';
import { CoursesDetailsInglesComponent } from './Pages/Coursers-Pages/courses-details-ingles/courses-details-ingles.component';
import { TeachersComponent } from './Pages/Teachers-Pages/Teachers/Teachers.component';
import { CoursesComponent } from './Pages/Coursers-Pages/Courses/Courses.component';
import { HomeComponent } from './Pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './Pages/About/About.component';
import { ContactComponent } from './Pages/Contact/Contact.component';
import { TeacherDetailsComponent } from './Pages/Teachers-Pages/teacher-details/teacher-details.component';
import { CoursesDetailsYorubaComponent } from './Pages/Coursers-Pages/courses-details-yoruba/courses-details-yoruba.component';
import { CoursesDetailsCriouloComponent } from './Pages/Coursers-Pages/courses-details-crioulo/courses-details-crioulo.component';
import { CoursesDetailsFrancesComponent } from './Pages/Coursers-Pages/courses-details-frances/courses-details-frances.component';
import { CoursesDetailsLatimComponent } from './Pages/Coursers-Pages/courses-details-latim/courses-details-latim.component';
import { CoursesDetailsFonComponent } from './Pages/Coursers-Pages/courses-details-fon/courses-details-fon.component';
import { TeacherDetailsBelvicComponent } from './Pages/Teachers-Pages/teacher-details-Belvic/teacher-details-Belvic.component';
import { TeacherDetailsCalinComponent } from './Pages/Teachers-Pages/teacher-details-Calin/teacher-details-Calin.component';
import { TeacherDetailsIsabelaComponent } from './Pages/Teachers-Pages/teacher-details-Isabela/teacher-details-Isabela.component';
import { CoursesDetailsEspanholComponent } from './Pages/Coursers-Pages/courses-details-espanhol/courses-details-espanhol.component';
import { TeacherDetailsDannyComponent } from './Pages/Teachers-Pages/teacher-details-Danny/teacher-details-Danny.component';
import { CoursesDetailsArabeComponent } from './Pages/Coursers-Pages/courses-details-arabe/courses-details-arabe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'courses', component: CoursesComponent },
  { path: 'courses/yoruba', component: CoursesDetailsYorubaComponent },
  { path: 'courses/ingles', component: CoursesDetailsInglesComponent },
  { path: 'courses/crioulo', component: CoursesDetailsCriouloComponent },
  { path: 'courses/arabe', component: CoursesDetailsArabeComponent },
  { path: 'courses/latim', component: CoursesDetailsLatimComponent },
  { path: 'courses/frances', component: CoursesDetailsFrancesComponent },
  { path: 'courses/fon', component: CoursesDetailsFonComponent },
  { path: 'courses/espanhol', component: CoursesDetailsEspanholComponent },
  { path: 'courses/kiswahili', component: CoursesDetailsKiswahiliComponent },

  { path: 'teachers', component: TeachersComponent },
  { path: 'teachers/kamal', component: TeacherDetailsComponent },
  { path: 'teachers/calin', component: TeacherDetailsCalinComponent },
  { path: 'teachers/isabela', component: TeacherDetailsIsabelaComponent },
  { path: 'teachers/belvic', component: TeacherDetailsBelvicComponent },
  { path: 'teachers/danny', component: TeacherDetailsDannyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
