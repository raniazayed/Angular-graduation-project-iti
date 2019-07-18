import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { FooterComponent } from './shared component/footer/footer.component';
import { HeaderComponent } from './Homeview/header/header.component';
import { UploadimgService } from './services/uploadimg.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorage } from 'angularfire2/storage';
import { JwtModule } from "@auth0/angular-jwt";
import { CommonModule } from '@angular/common';

import {NgbModule, NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbRating} from '@ng-bootstrap/ng-bootstrap';
import {FileUploadModule} from 'primeng/fileupload';
import {ChartModule} from 'primeng/primeng';
// import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { FreelancerformComponent } from './forms/signupform/freelancerform.component';
import { LoginComponent } from './forms/login/login.component';
import { NotfoundComponent } from './forms/notfound/notfound.component';
import { AddformComponent } from './forms/addform/addform.component';
import { EnvironmentUrlService } from './services/environment-url.service';

import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NavbarComponent } from './Homeview/header/navbar/navbar.component';
import { HomeComponent } from './Homeview/home/home.component';
import { AllcategoriesComponent } from './Homeview/allcategories/allcategories.component';
import { SubcategoryComponent } from './Homeview/allcategories/subcategory/subcategory.component';
import { FreelancerprofileComponent } from './Homeview/freelancerprofile/freelancerprofile.component';
import { FreelanceheaderComponent } from './freelancer view/freelanceheader/freelanceheader.component';
import { FreelancernavbarComponent } from './freelancer view/freelanceheader/freelancernavbar/freelancernavbar.component';
import { ScheduleComponent } from './freelancer view/schedule/schedule.component';
import { UploadWorksComponent } from './freelancer view/upload-works/upload-works.component';
import { EditProfileComponent } from './freelancer view/edit-profile/edit-profile.component';
import { FreelancerHomeComponent } from './freelancer view/freelancer-home/freelancer-home.component';
import { RequestsComponent } from './freelancer view/requests/requests.component';


import { MaterialModule } from './modules/material.module';
import { MatFileUploadModule } from 'angular-material-fileupload';
import {MatInputModule} from '@angular/material/input';
// import {MatFileUploadQueue} from 'angular-material-fileupload/matFileUploadQueue';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { ForbiddenComponent } from './shared component/forbidden/forbidden.component';
import { PostjobComponent } from './Homeview/postjob/postjob.component';
import { CustomerComponent } from './cutomer views/customer/customer.component';
import { MyrequestsComponent } from './cutomer views/myrequests/myrequests.component';
import { MyprofileComponent } from './cutomer views/myprofile/myprofile.component';
import { MyhomeComponent } from './cutomer views/myhome/myhome.component';
import { HomebodyComponent } from './shared component/homebody/homebody.component';
import { MatNativeDateModule, MatDialogModule } from '@angular/material';
import { FreelancerComponent } from './freelancer view/freelancer/freelancer.component';
import { PostajobComponent } from './shared component/postajob/postajob.component';
import { FreelancertaskComponent } from './forms/freelancertask/freelancertask.component';
import { EditprofileComponent } from './shared component/editprofile/editprofile.component';
import { ModalComponent } from './shared component/modal/modal.component';
import { HomeGuard } from './home.guard';
import { FreelacerpostjobComponent } from './shared component/freelacerpostjob/freelacerpostjob.component';
import { ServicepostjobComponent } from './shared component/servicepostjob/servicepostjob.component';
import { DashboardComponent } from './Admin view/dashboard/dashboard.component';
import { AdminComponent } from './Admin view/admin/admin.component';
import { ChatmodalComponent } from './shared component/chatmodal/chatmodal.component';
import { RateComponent } from './modals/rate/rate.component';
import { CommentComponent } from './modals/comment/comment.component';
import { StatisticsComponent } from './Admin view/statistics/statistics.component';
import { TasksComponent } from './Admin view/tasks/tasks.component';
import { UsersComponent } from './Admin view/users/users.component';
import { ComplainsComponent } from './Admin view/complains/complains.component';
import { FinishedRequestsComponent } from './cutomer views/finished-requests/finished-requests.component';
import { HistoryRequestsComponent } from './cutomer views/history-requests/history-requests.component';
import { FreelancerHistoryComponent } from './freelancer view/freelancer-history/freelancer-history.component';
import { FreelancerReplyComponent } from './modals/freelancer-reply/freelancer-reply.component';
import { ChartDonughtComponent } from './shared component/chart-donught/chart-donught.component';
import { VerifySsnComponent } from './modals/verify-ssn/verify-ssn.component';
import { LogoutComponent } from './modals/logout/logout.component';
import { PendingComponent } from './shared component/pending/pending.component';

@NgModule({
  declarations: [
    AppComponent,
    FreelancerformComponent,LoginComponent,NotfoundComponent,AddformComponent,HeaderComponent,FooterComponent,
    NavbarComponent,HomeComponent,AllcategoriesComponent,SubcategoryComponent,FreelancerprofileComponent,FreelanceheaderComponent,
    FreelancernavbarComponent,ScheduleComponent,UploadWorksComponent,EditProfileComponent,FreelancerHomeComponent,
    RequestsComponent,ForbiddenComponent,PostjobComponent,CustomerComponent,MyrequestsComponent,MyprofileComponent,
    MyhomeComponent,HomebodyComponent,FreelancerComponent,PostajobComponent,FreelancertaskComponent,
    EditprofileComponent,ModalComponent,FreelacerpostjobComponent,ServicepostjobComponent,DashboardComponent,
    AdminComponent,ChatmodalComponent,RateComponent,CommentComponent,StatisticsComponent,TasksComponent,UsersComponent,
    ComplainsComponent,
    FinishedRequestsComponent,
    HistoryRequestsComponent,
    FreelancerHistoryComponent,
    FreelancerReplyComponent,
    ChartDonughtComponent,
    VerifySsnComponent,
    LogoutComponent,
    PendingComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatAutocompleteModule,
    NgMatSearchBarModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,ChartModule,
    MatNativeDateModule,MatRadioModule,MatFileUploadModule,FileUploadModule,MatDialogModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAGxRNzw5iuDZeVWBXZVsktK9r-Q9nI6KM",
      authDomain: "cart-9b31c.firebaseapp.com",
      databaseURL: "https://cart-9b31c.firebaseio.com",
      projectId: "cart-9b31c",
      storageBucket: "cart-9b31c.appspot.com"
    }),
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter,
    //     authScheme: 'JWT'
    //   }
    // })
  ],
  providers: [EnvironmentUrlService,AngularFireStorage,AuthenticationService,AuthGuard,HomeGuard,NgbRatingConfig ],
  bootstrap: [AppComponent],
  entryComponents:[ModalComponent,ChatmodalComponent,CommentComponent,RateComponent,FreelancerReplyComponent,VerifySsnComponent,LogoutComponent]
})
export class AppModule { }
