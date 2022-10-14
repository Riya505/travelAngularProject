import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  name=""
  email=""
  tourPackage=""
  arrivalDate=""
  numberOfPerson=""
  discountCouponCode=""

  readValues=()=>{
    let data={
      "name":this.name,
      "email":this.email,
      "tourPackage":this.tourPackage,
      "arrivalDate":this.arrivalDate,
      "numberOfPerson":this.numberOfPerson,
      "discountCouponCode":this.discountCouponCode
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
