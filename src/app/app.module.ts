import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientinformationComponent } from './clientinformation/clientinformation.component';
import { AddteammemberComponent } from './addteammember/addteammember.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { TaskcompletedComponent } from './taskcompleted/taskcompleted.component';
import { EffortinvestedComponent } from './effortinvested/effortinvested.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AddteammemberComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ClientinformationComponent,
    AddteammemberComponent,
    ProjectdetailsComponent,
    TaskcompletedComponent,
    EffortinvestedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
