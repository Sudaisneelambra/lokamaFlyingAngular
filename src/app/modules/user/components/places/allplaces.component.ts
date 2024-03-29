import { Component, OnDestroy, OnInit } from "@angular/core";
import { UserPlaceService } from "../../services/placeservice.service";
import { Subscription } from "rxjs";
import { useservice } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
    selector:'app-allplaces',
    templateUrl:'./allplaces.component.html',
    styleUrls:['./allplaces.component.css']
})

export class AllPlacesComponent implements OnInit,OnDestroy{

    data:any
    places:any
    placeget$ = new Subscription();
    bool=false

    constructor(private placeservice:UserPlaceService, private service:useservice, private router:Router){}

    ngOnInit(): void {
      window.scrollTo(0, 0);

      this.bool=true
        if(this.router.url =='/user/places'){
            this.router.navigate(['/user/places/lokamdescription'])
        }

        this.placeget$ = this.placeservice.gettingplace().subscribe({
            next: (res) => {
              if (res.expiry) {
                alert('session expired or internal error please login');
                this.service.userlogout();
              } else {
                if (res.success) {
                 this.bool=false  
                  this.data=res.data
                  this.places =  this.data;
                } else {
                  console.log(res.message);
                }
              }
            },
            error: (err) => {
              console.log(err);
            },
          });
      
    }
    back(){
      this.router.navigate(['/user/home'])
    }

    singleplace(id:any) {
      this.router.navigate(['/user/places/singleplace',id])
    }

    searching(query:any){
      
      if (query.trim() !== '') {
        
        this.places = this.places.filter((place:any)=>{
         return  place.placeName.toLowerCase().includes(query.toLowerCase())
          
        })
      } else{
        this.places=this.data
      }
    }
    ngOnDestroy(): void {
        this.placeget$?.unsubscribe()
    }


}