import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { agencyService } from "src/app/modules/agency/services/agency.service";

@Component({
    selector:'app-guidedelete',
    templateUrl:'./guidedeleteconformation.component.html',
    styleUrls:['./guidedeleteconformation.component.css']
})

export class GuideDeleteConformation implements OnInit{


    constructor(private service:agencyService, private router:Router){}
    
    @Input() id!:any
    @Output() canceldelete= new EventEmitter()
    @Output() msg= new EventEmitter()
    ngOnInit(): void {
        console.log(this.id);
        
    }
    confirmboolean(){
         // deleting place from database
         this.service.deletingGuide(this.id).subscribe({
             next:(res)=>{
                 if(res.success){
                    this.msg.emit(res.message)
                    this.canceldelete.emit(false)
                     setTimeout(() => {
                        this.msg.emit('')
                         this.router.navigate(['/agency/home'])
                     }, 2000);
                 }
             },
             error:(err)=>{
               console.log(err);   
             }
         })
    }

    cancel(){
        this.canceldelete.emit(false)
    }
}