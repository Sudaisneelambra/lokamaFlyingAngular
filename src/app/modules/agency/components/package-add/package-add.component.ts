import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { agencyService } from '../../services/agency.service';

@Component({
  selector: 'app-package-add',
  templateUrl: './package-add.component.html',
  styleUrls: ['./package-add.component.css']
})
export class PackageAddComponent {
  
  packageForm!: FormGroup;
  booleanvalue:boolean =false
  guides!:any[];
  places!:any[];
  selectedplace: any;
  arrivalTime!: any;
  returntime: any;
  addedplaces:any[]=[]
  selectedGuides: any[] = [];
  

  constructor(private fb: FormBuilder, private location:Location , private service:agencyService) { 

    this.packageForm = this.fb.group({
      packageName: ['', Validators.required],
      aboutPackage: ['',Validators.required],
      packagePrice: ['', Validators.required],
      fecilities: this.fb.group({
        Transportation: [false],
        Accommodation: [false],
        Meals: [false],
        ProfessionalGuides: [false],
        LanguageSupport: [false],
        TravelInsurance: [false],
        CustomerSupport: [false],

      }, { validators: this.requireAtLeastOneFacility }),
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      offer:['',Validators.required],
      offerRate: [''],
      maximumCapacity: ['', Validators.required],
      availableSlot: ['', Validators.required]
    });
   
  }


  ngOnInit(): void {
    
  }

  // required atleast one
  requireAtLeastOneFacility(control: AbstractControl): { [key: string]: boolean } | null {
    const facilities = Object.values(control.value);
    const isAtLeastOneSelected = facilities.some(value => value);
    return isAtLeastOneSelected ? null : { 'atLeastOneFacilityRequired': true };
  }

  onSubmit() {
    console.log(this.packageForm.value);
    console.log(this.addedplaces);
    console.log(this.selectedGuides);
    if(!this.packageForm.valid || this.addedplaces && this.addedplaces.length<1 || this.selectedGuides && this.selectedGuides.length<1){
      alert('choose the required datas')
    } else {
      const fulldata= {mainform:this.packageForm.value,places:this.addedplaces,guid:this.selectedGuides}
      console.log(fulldata);
      this.service.addpackage(fulldata).subscribe({
        next:(res)=>{
          console.log(res.message);
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
    }
    
    
    
  }

  // checking offer is valid
  onOfferChange(event:any,boolean:string){
        if(boolean=='yes'){
          this.booleanvalue=true
        } else if( boolean ='no'){
          this.booleanvalue=false
        }
    }

// update fecility
  updatefecility(serviceName: string, event: any) {
    if (event.target.checked) {
      this.packageForm.get(`fecilities.${serviceName}`)?.setValue(true);
    } else {
      this.packageForm.get(`fecilities.${serviceName}`)?.setValue(false);
    }
  }

// back to previous page
back(){
  this.location.back()
}

// getting all places
getplace(){
  this.service.gettingplace().subscribe({
    next:(res)=>{
      this.places=res.data
    },
    error:(err)=>{
      console.log(err);
    }
  })
  }

  guidess(){
    this.service.gettingguides().subscribe({
      next:(res)=>{
        this.guides=res.data
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  selectPlace(place: any) {

    const filter = this.addedplaces.filter((m)=>{
      return m.placename == place.placeName
    })
    if(filter && filter.length>0){
      alert('you already selected this place ..choose athother place')
      this.selectedplace=null
    }else{
      console.log(filter);
      this.selectedplace = place;
      console.log(this.selectedplace);
    }
   
    
  }

  adding(){
    if(this.selectPlace==null || this.arrivalTime==null || this.returntime ==null){
      alert('please add the fields')
    }else{
      const place ={
        placeId:this.selectedplace._id,
        placename:this.selectedplace.placeName,
        arrivingtime:this.arrivalTime,
        returntime:this.returntime
      }
      this.addedplaces.push(place)
      this.selectedplace= null
      this.arrivalTime =null
      this.returntime =null
  
      console.log(this.addedplaces);
    }
    
  }

  toggleGuideSelection(guide: any) {
    const index = this.selectedGuides.findIndex(selectedGuide => selectedGuide._id === guide._id);
    console.log(index);
    
    if (index > -1) {
      console.log('nthoss');
      
      // If the guide is already selected, remove it from the selectedGuides array
      this.selectedGuides.splice(index, 1);
    } else {
      console.log('koyppella');
      const guides={id:guide._id,name:guide.guidename}
      // If the guide is not selected, add it to the selectedGuides array
      this.selectedGuides.push(guides);
    }
    console.log(this.selectedGuides);
    
  }
  
}