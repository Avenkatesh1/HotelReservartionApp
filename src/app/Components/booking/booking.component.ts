import { Component, OnInit, } from '@angular/core';
import { MaterialModule } from '../../Material/material/material.module';
import { CountrysService } from '../../Shered/countrys.service';
import { FormControl, FormGroup,Validators,FormArray } from '@angular/forms';
import { CitysService } from '../../Shered/citys.service';
import { CommonModule } from '@angular/common';
import { Fruit } from './Modules/fruits';



@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [MaterialModule,CommonModule],
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

  Hobbies =[]=[
    {"id":4, "hobbiesName":"Coding"},
    {"id":1, "hobbiesName":"Photography"},
    {"id":3, "hobbiesName":"Travelling With Music"},
    {"id":2, "hobbiesName":"Cricket"},
    {"id":5, "hobbiesName":"Hand Ball"},
  ];
  gender!: string;
  Gender =[] = ['Mail', 'FeMail', 'Others'];
  expertiseLevel =[]=[
    {"id":1, "levels":"Beginner"},
    {"id":2, "levels":"Intermediate"},
    {"id":3, "levels":"Senior"},
    {"id":4, "levels":"Professional"},
    {"id":5, "levels":"Expert"},
  ];

  constructor(private country:CountrysService, private citys:CitysService){
    this.formGroup = new FormGroup({
        email: new FormControl(null,[Validators.required,Validators.email]),
        customerName: new FormControl(null,[Validators.required,Validators.maxLength(30),Validators.pattern('[A-Za-z.]*$')]),
        country: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        receiveNewsLetters: new FormControl(null),
        Hobbies: new FormControl([]),
        allHobbies: new FormControl(null),
        gender: new FormControl(null, [Validators.required]),
        dateOfBirth: new FormControl(null),
        studyPeriodStart: new FormControl(null),
        studyPeriodEnd: new FormControl(null),
        expertiseLevel: new FormControl(null),
        fruits: new FormControl(null),

    });
  }

  ngOnInit(): void {
    this.getCountrys();
    // this.getCitys();
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
All:boolean = true;
USA:boolean = false;
Uk:boolean = false

allFruits: Fruit[]=[
  {name:"Apply"},
  {name:"Orange"},
  {name:"PineApple"},
  {name:"Mango"},
  {name:"Kiwi"},
  {name:"Jag"},
  {name:"Papaya"},
  {name:"Blueberry"},
  {name:"Banana"},
  {name:"Currant"},
  {name:"Fig"},
  {name:"Gooseberry"},
  {name:"Date"},
  {name:"Olive"},
  {name:"Tangerine"},
  {name:"Apricot"},
  {name:"Boysenberry"},
  {name:"Ackee and Durian"},
  {name:"Watermelon"},
  {name:"Strawberry"},
]

}


