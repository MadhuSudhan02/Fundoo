import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationformComponent } from './components/registrationform/registrationform.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { SigninComponent } from './components/signin/signin.component' ;
import { MatPseudoCheckboxModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SideNavBinComponent } from './components/side-nav-bin/side-nav-bin.component';
import { SideNavRemainderComponent } from './components/side-nav-remainder/side-nav-remainder.component';
import { SideNavEditlabelComponent } from './components/side-nav-editlabel/side-nav-editlabel.component';
import { SideNavArchieveComponent } from './components/side-nav-archieve/side-nav-archieve.component';
import { IconComponent } from './components/icon/icon.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { UpdatenoteComponent } from './components/updatenote/updatenote.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { ReviewarrayComponent } from './components/reviewarray/reviewarray.component';
import { SearchfilterPipe } from './components/Pipe/searchfilter.pipe';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ArrayprintComponent } from './components/arrayprint/arrayprint.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';





@NgModule({
  declarations: [
    AppComponent,
    RegistrationformComponent,
    SigninComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    GetallnotesComponent,
    CreateNoteComponent,
    DisplayNoteComponent,
    PageNotFoundComponent,
    SideNavBinComponent,
    SideNavRemainderComponent,
    SideNavEditlabelComponent,
    SideNavArchieveComponent,
    IconComponent,
    ParentComponent,
    ChildComponent,
    UpdatenoteComponent,
    ReviewarrayComponent,
    SearchfilterPipe,
    ArrayprintComponent,
  ],
  imports: [
    BrowserModule,MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatFormFieldModule,MatButtonModule,MatInputModule,
    ReactiveFormsModule,MatPseudoCheckboxModule,MatCheckboxModule,HttpClientModule,
    MatSidenavModule,MatToolbarModule,MatListModule,MatIconModule,FormsModule,MatMenuModule,
    MatDatepickerModule,MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
