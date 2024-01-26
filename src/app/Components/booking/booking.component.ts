import { Component, OnInit, } from '@angular/core';
import { MaterialModule } from '../../Material/material/material.module';
import { CountrysService } from '../../Shered/countrys.service';
import { FormControl, FormGroup,Validators } from '@angular/forms';



@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  countrysList = [] =[];
  formGroup: any;
  cityNames = [] = [
     {"id":1, "cityName":"Bangalore"},
     {"id":2, "cityName":"Kochi"},
     {"id":3, "cityName":"Mumbai"},
     {"id":4, "cityName":"Chennai"},
     {"id":5, "cityName":"Delhi"},
     {"id":6, "cityName":"Kolkata"},
     {"id":7, "cityName":"Ajmer"},
     {"id":8, "cityName":"Mysuru"},
     {"id":9, "cityName":"	Hyderabad"},
     {"id":10, "cityName":"Jaipur"}
  ];
  constructor(private country:CountrysService){
    this.formGroup = new FormGroup({
        email: new FormControl(null,[Validators.required,Validators.email]),
        customerName: new FormControl(null,[Validators.required,Validators.maxLength(30),Validators.pattern('[A-Za-z.]*$')]),
        country: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        
    })
  }

  ngOnInit(): void {
    this.getCountrys()
  }

  getCountrys(){
    debugger
    this.country.getCountrys().subscribe((res:any)=>{
      this.countrysList = res.countries;
      // console.log(res);
    },
    (error)=>{
      console.log(error)

    })
  }

}


