import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  firstName=""
  lastName=""
  email=""
  feedback=""

  readValue=()=>{
    let data={
      "firstName":this.firstName,
      "lastName":this.lastName,
      "email":this.email,
      "feedback":this.feedback
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
