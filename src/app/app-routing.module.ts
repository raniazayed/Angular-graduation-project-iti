import { FreelancerComponent } from './freelancer view/freelancer/freelancer.component';
import { PostjobComponent } from './Homeview/postjob/postjob.component';
import { CustomerComponent } from './cutomer views/customer/customer.component';
import { MyrequestsComponent } from './cutomer views/myrequests/myrequests.component';
import { AuthGuard } from './auth.guard';
import { ForbiddenComponent } from './shared component/forbidden/forbidden.component';
import { FreelancerHomeComponent } from './freelancer view/freelancer-home/freelancer-home.component';
import { AllcategoriesComponent } from './Homeview/allcategories/allcategories.component';
import { HomeComponent } from './Homeview/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './forms/notfound/notfound.component';
import { LoginComponent } from './forms/login/login.component';
import { FreelancerformComponent } from './forms/signupform/freelancerform.component';
import { AddformComponent } from './forms/addform/addform.component';
import { SubcategoryComponent } from './Homeview/allcategories/subcategory/subcategory.component';
import { FreelancerprofileComponent } from './Homeview/freelancerprofile/freelancerprofile.component';
import { EditProfileComponent } from './freelancer view/edit-profile/edit-profile.component';
import { ScheduleComponent } from './freelancer view/schedule/schedule.component';
import { UploadWorksComponent } from './freelancer view/upload-works/upload-works.component';
import { RequestsComponent } from './freelancer view/requests/requests.component';
import { MyprofileComponent } from './cutomer views/myprofile/myprofile.component';
import { MyhomeComponent } from './cutomer views/myhome/myhome.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'addform',component:AddformComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:AddformComponent},
  {path:'allcategories',component:AllcategoriesComponent},
  {path:'Freelancerform/:flag1',component:FreelancerformComponent},
  {path:'Freelancerform/:flag2',component:FreelancerformComponent},
  {path:'subcategory/:id',component:SubcategoryComponent},
  {path:'freelancerprofile/:id',component:FreelancerprofileComponent},
  {path:'customer',component:CustomerComponent,canActivate:[AuthGuard],data:{roles:['customer']},children:[
    {path:'home',component:MyhomeComponent},
    {path:'postjob',component:PostjobComponent},
    {path:'myrequests',component:MyrequestsComponent},
    {path:'EditProfile',component:MyprofileComponent},

  ]},
  {path:'freelancer',component:FreelancerComponent,canActivate:[AuthGuard],data:{roles:['freelancer']},children:[
    {path:'freelancerhome',component:FreelancerHomeComponent},
    {path:'requests',component:RequestsComponent},
    {path:'EditProfile',component:EditProfileComponent},
    {path:'schedule',component:ScheduleComponent},
    {path:'UploadWorks',component:UploadWorksComponent},
  ]},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
