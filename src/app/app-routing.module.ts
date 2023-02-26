import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForgotpasswordComponent } from "./components/forgotpassword/forgotpassword.component";
import { GetallnotesComponent } from "./components/getallnotes/getallnotes.component";
import { RegistrationformComponent } from "./components/registrationform/registrationform.component";
import { ResetpasswordComponent } from "./components/resetpassword/resetpassword.component";
import { SigninComponent } from "./components/signin/signin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { SideNavArchieveComponent } from "./components/side-nav-archieve/side-nav-archieve.component";
import { SideNavBinComponent } from "./components/side-nav-bin/side-nav-bin.component";
import { SideNavEditlabelComponent } from "./components/side-nav-editlabel/side-nav-editlabel.component";
import { SideNavRemainderComponent } from "./components/side-nav-remainder/side-nav-remainder.component";
import { ChildComponent } from "./components/child/child.component";
import { ParentComponent } from "./components/parent/parent.component";
import { ReviewarrayComponent } from "./components/reviewarray/reviewarray.component";
import { ArrayprintComponent } from "./components/arrayprint/arrayprint.component";


const routes: Routes = [
  { path: "", redirectTo: "Login", pathMatch: "full" },
  {path : "review" , component: ReviewarrayComponent},
  {path : "array" , component: ArrayprintComponent},
  { path: "userSignup", component: RegistrationformComponent },
  { path: "Login", component: SigninComponent },
  { path: "forgotpassword", component: ForgotpasswordComponent },
  { path: "resetpassword", component: ResetpasswordComponent },
  { path: "child" , component : ChildComponent},
  { path: "parent" , component : ParentComponent},
  {
    path: "home",
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "note", pathMatch: "full" },
      { path: "note", component: GetallnotesComponent },
      { path: "remainder", component: SideNavRemainderComponent },
      { path: "editlabel", component: SideNavEditlabelComponent },
      { path: "archieve", component: SideNavArchieveComponent },
      { path: "bin", component: SideNavBinComponent },
    ],
  },

  { path: "**", component: PageNotFoundComponent },
];

@NgModule(
  // {path: 'registration' , component : RegistrationformComponent}
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  }
)
export class AppRoutingModule {}
