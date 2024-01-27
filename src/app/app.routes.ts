import { Routes } from '@angular/router';
import { BookingComponent } from './Components/booking/booking.component';
import { BookingListComponent } from './Components/booking-list/booking-list.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"/booking-list",
        pathMatch:"full"
    },
    {
        path:"booking",
        component:BookingComponent
    },
    {
        path:"booking-list",
        component:BookingListComponent
    },
    {
        path:"**",
        redirectTo:"/booking-list",
        pathMatch:"full"
    }
    
];
