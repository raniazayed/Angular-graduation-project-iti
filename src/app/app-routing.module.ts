import { FreelancerHistoryComponent } from './freelancer view/freelancer-history/freelancer-history.component';
import { HistoryRequestsComponent } from './cutomer views/history-requests/history-requests.component';
import { FinishedRequestsComponent } from './cutomer views/finished-requests/finished-requests.component';
import { ComplainsComponent } from './Admin view/complains/complains.component';
import { TasksComponent } from './Admin view/tasks/tasks.component';
import { UsersComponent } from './Admin view/users/users.component';
import { AdminComponent } from './Admin view/admin/admin.component';
import { DashboardComponent } from './Admin view/dashboard/dashboard.component';
import { ServicepostjobComponent } from './shared component/servicepostjob/servicepostjob.component';
import { FreelacerpostjobComponent } from './shared component/freelacerpostjob/freelacerpostjob.component';
import { HomeGuard } from './home.guard';
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
import { FreelancertaskComponent } from './forms/freelancertask/freelancertask.component';
import { PostajobComponent } from './shared component/postajob/postajob.component';
import { EditprofileComponent } from './shared component/editprofile/editprofile.component';
import { StatisticsComponent } from './Admin view/statistics/statistics.component';
import { PendingComponent } from './shared component/pending/pending.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent,canActivate:[HomeGuard]},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'addform',component:AddformComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:AddformComponent},
  {path:'task',component:FreelancertaskComponent},
  {path:'allcategories',component:AllcategoriesComponent},
  {path:'Freelancerform/:flag1',component:FreelancerformComponent},
  {path:'Freelancerform/:flag2',component:FreelancerformComponent},
  {path:'subcategory/:id',component:SubcategoryComponent},
  {path:'freelancerprofile/:id',component:FreelancerprofileComponent},
  // {path:'dashboard',component:DashboardComponent},
  // {path:'statistics',component:StatisticsComponent},
  // {path:'users',component:UsersComponent},
  // {path:'tasks',component:TasksComponent},
  // {path:'complains',component:ComplainsComponent},
  // {path:'pending',component:PendingComponent},

  {path:'customer',component:CustomerComponent,canActivate:[AuthGuard],data:{roles:['customer']},children:[
  // {path:'customer',component:CustomerComponent,children:[
    {path:'',pathMatch: 'full' ,redirectTo: 'home'},
    {path:'home',component:HomeComponent},
    {path:'allcategories',component:AllcategoriesComponent},
    {path:'subcategory/:id',component:SubcategoryComponent},
    {path:'freelancerprofile/:id',component:FreelancerprofileComponent},
    {path:'postjob',component:PostajobComponent},
    {path:'postjobfreelaner/:id',component:FreelacerpostjobComponent},
    {path:'Statistics',component:StatisticsComponent},

    {path:'postjobservice/:id',component:ServicepostjobComponent},
    {path:'myrequests',component:MyrequestsComponent},
    {path:'notification',component:FinishedRequestsComponent},
    {path:'history',component:HistoryRequestsComponent},
    {path:'EditProfile',component:MyprofileComponent},
    {path:'profile',component:MyhomeComponent},


  ]},
  {path:'freelancer',component:FreelancerComponent,canActivate:[AuthGuard],data:{roles:['freelancer']},children:[
    {path:'freelancerhome',component:FreelancerHomeComponent},
    {path:'requests',component:RequestsComponent},
    {path:'history',component:FreelancerHistoryComponent},
    {path:'EditProfile',component:EditProfileComponent},
    {path:'schedule',component:ScheduleComponent},
    {path:'UploadWorks',component:UploadWorksComponent},
  ]},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard],data:{roles:['admin']},children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'tasks',component:TasksComponent},
    {path:'Statistics',component:StatisticsComponent},
    {path:'users',component:UsersComponent},
    {path:'complains',component:ComplainsComponent},

  ]},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
