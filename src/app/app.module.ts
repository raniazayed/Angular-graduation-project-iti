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

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { ForbiddenComponent } from './shared component/forbidden/forbidden.component';
import { PostjobComponent } from './Homeview/postjob/postjob.component';
import { CustomerComponent } from './cutomer views/customer/customer.component';
import { MyrequestsComponent } from './cutomer views/myrequests/myrequests.component';
import { MyprofileComponent } from './cutomer views/myprofile/myprofile.component';
import { NavComponent } from './cutomer views/myhome/nav/nav.component';
import { MyhomeComponent } from './cutomer views/myhome/myhome.component';
import { HomebodyComponent } from './shared component/homebody/homebody.component';
import { MatNativeDateModule } from '@angular/material';
import { FreelancerComponent } from './freelancer view/freelancer/freelancer.component';
import { PostajobComponent } from './shared component/postajob/postajob.component';


@NgModule({
  declarations: [
    AppComponent,
    FreelancerformComponent,
    LoginComponent,
    NotfoundComponent,
    AddformComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AllcategoriesComponent,
    SubcategoryComponent,
    FreelancerprofileComponent,
    FreelanceheaderComponent,
    FreelancernavbarComponent,
    ScheduleComponent,
    UploadWorksComponent,
    EditProfileComponent,
    FreelancerHomeComponent,
    RequestsComponent,
    ForbiddenComponent,
    PostjobComponent,
    CustomerComponent,
    MyrequestsComponent,
    MyprofileComponent,
    NavComponent,
    MyhomeComponent,
    HomebodyComponent,
    FreelancerComponent,
    PostajobComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    // NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatAutocompleteModule,
    NgMatSearchBarModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,MatRadioModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAGxRNzw5iuDZeVWBXZVsktK9r-Q9nI6KM",
      authDomain: "cart-9b31c.firebaseapp.com",
      databaseURL: "https://cart-9b31c.firebaseio.com",
      projectId: "cart-9b31c",
      storageBucket: "cart-9b31c.appspot.com"
    })
  ],
  providers: [EnvironmentUrlService,AngularFireStorage,AuthenticationService,AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
