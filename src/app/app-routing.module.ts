import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddteammemberComponent } from './addteammember/addteammember.component';
import { HomeComponent } from './home/home.component';
import { ClientinformationComponent } from './clientinformation/clientinformation.component';
import { EffortinvestedComponent } from './effortinvested/effortinvested.component';
import { TaskcompletedComponent } from './taskcompleted/taskcompleted.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'addteammember',component:AddteammemberComponent},
  {path:'clientinformation',component:ClientinformationComponent},
  {path:'effortinvested',component:EffortinvestedComponent},
  {path:'projectdetails',component:ProjectdetailsComponent},
  {path:'taskcompleted',component:TaskcompletedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
