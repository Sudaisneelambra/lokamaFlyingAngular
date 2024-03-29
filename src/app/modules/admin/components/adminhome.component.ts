import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { admincommon } from "../services/admincommon.service";

@Component({
    selector:'app-adminhome',
    templateUrl:'./adminhome.component.html',
    styleUrls:['./adminhome.component.css']
})

export class AdminHome {

    one=true

    constructor(private router:Router, private adminmain:admincommon){}

  boolean(){
    if(this.one){
      this.one=false
    } else {
      this.one=true
    }
  }

  gotouser(){
    this.one=true
    this.router.navigate(['/admin/user-list'])
    
  }

  gotoagency(){
    this.one=true
    this.router.navigate(['/admin/agency-list'])
  }

  gotoBlockedAgency(){
    this.one=true
    this.router.navigate(['/admin/blocked-agency'])
  }

  gotoblockedusers(){
    this.one=true
    this.router.navigate(['/admin/blocked-user'])
  }
  gotopackage(){
    this.router.navigate(['/admin/packages'])
  }

  gotoplace(){
    this.router.navigate(['/admin/places'])
  }
  gotoguides(){
    this.router.navigate(['/admin/guides'])
  }
  gotobookingdetails(){
    this.router.navigate(['/admin/bookingdetails'])
  }

  gotoagencyreview(){
    this.router.navigate(['/admin/agencyreview'])
  }
  gotomessage(){
    this.router.navigate(['/admin/chatlist'])
  }

  gotopagereview(){
    this.router.navigate(['/admin/pagereview'])
  }

  gotohome(){
    this.router.navigate(['/admin'])
  }

  logout(){
    const confirm = window.confirm('are you sure to logout')
   if(confirm){
    this.adminmain.agencylogout()
   }
  }

  requests(){
    this.one=true
    this.router.navigate(['/admin/requests'])
  }
}