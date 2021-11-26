import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AllTaskComponent } from './all-task/all-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'addTask', component: AddTaskComponent, canActivate: [AuthGuard] },
  { path: 'allTask', component: AllTaskComponent, canActivate: [AuthGuard] },
  {
    path: 'allTask/detail/:id',
    component: DetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'allTask/edit/:id',
    component: UpdateTaskComponent,
    canActivate: [AuthGuard],
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = {
  LoginComponent,
  AddTaskComponent,
  HomeComponent,
  AllTaskComponent,
  UpdateTaskComponent,
  PageNotFoundComponent,
  DetailComponent,
};
