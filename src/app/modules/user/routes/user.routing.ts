import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { BookTour } from '../components/booktour/booktour.component';
import { MainHome } from '../components/main.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { ProfileAdd } from '../components/profileadd/profileadd.component';
import { bookingtripcomponent } from '../components/bookingtrip/bookingtrip.component';
import { AllPlacesComponent } from '../components/places/allplaces.component';
import { LokamaPlaceDescriptionComponent } from '../components/places/lokamaplacedescription/lokamaplacedescription.component';
import { SinglePlaceComponent } from '../components/places/singleplace/singleplace.component';
import { PackagesComponent } from '../components/packages/packages.component';
import { SinglePackegeComponent } from '../components/singlepackage/singlepackage.component';
import { AgneciesComponent } from '../components/agencies/agencies.component';
import { WishlistComponent } from '../components/wishlist/wishlist.component';
import { BookingComponent } from '../components/booking/booking.component';
import { guidesComponent } from '../components/guides/guides.component';
import { BookingDetailsComponent } from '../components/bookingdetails/bookingdetails.component';
import { AgencyFulldetailsComponent } from '../components/agencyfulldetails/agencyfulldetails.component';
import { ChatComponent } from '../components/chat/chat.component';

const routes: Routes = [
  {
    path: '',
    component: MainHome,
    children:[
      {
        path:'home',
        component:HomepageComponent
      },
      {
        path:'booktour',
        component:BookTour
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'profileadd',
        component:ProfileAdd
      },
      {
        path:'bookng-trip',
        component:bookingtripcomponent
      },
      {
        path:'places',
        component:AllPlacesComponent,
        children:[
          {
            path:'lokamdescription',
            component:LokamaPlaceDescriptionComponent
          },
          {
            path:'singleplace/:id',
            component:SinglePlaceComponent
          }
        ]
      },
      {
        path:'packages',
        component:PackagesComponent
      },
      {
        path:'singlepackage/:id',
        component:SinglePackegeComponent
      },
      {
        path:'agencies',
        component:AgneciesComponent
      },
      {
        path:'wishlist',
        component:WishlistComponent
      },
      {
        path:'booking/:id',
        component:BookingComponent
      },
      {
        path:'guides',
        component:guidesComponent
      },
      {
        path:'bookingdetails',
        component:BookingDetailsComponent
      },
      {
        path:'agencyfulldetails/:id',
        component:AgencyFulldetailsComponent
      },
      {
        path:'chatcomponent',
        component:ChatComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutes {}
