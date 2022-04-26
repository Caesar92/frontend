import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vetement',
  templateUrl: './vetement.component.html',
  styleUrls: ['./vetement.component.css']
})
export class VetementComponent implements OnInit {

  formValueFromSidebar: any;
  constructor() { }

  ngOnInit(): void {
  }

  receptionMessage(msgName :any) {
    this.formValueFromSidebar = msgName;
    console.log(this.formValueFromSidebar)
  }

}
