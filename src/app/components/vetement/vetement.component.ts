import { Component, OnInit } from '@angular/core';
import { Vetement } from 'src/app/interfaces/vetement';
import { VetementsService } from 'src/app/services/vetements.service';

@Component({
  selector: 'app-vetement',
  templateUrl: './vetement.component.html',
  styleUrls: ['./vetement.component.css']
})
export class VetementComponent implements OnInit {
vetements : Vetement[] = []
  formValueFromSidebar: any;
  constructor(private vetementService : VetementsService) { }

  ngOnInit(): void {
    this.vetementService.getVetements()
    .subscribe({
      next: vetements => {
        this.vetements = vetements;
      },
      error : err => {
        console.log(err)
      },
      complete:() => {
        console.log('completed');
      }
    })
  }

  receptionMessage(msgName :any) {
    this.formValueFromSidebar = msgName;
    console.log(this.formValueFromSidebar)
    this.vetementService.getVetementFilter(this.formValueFromSidebar.sexe,this.formValueFromSidebar.min,this.formValueFromSidebar.max,this.formValueFromSidebar.taille )
    .subscribe({
      next: vetements => {
        this.vetements = vetements;
      },
      error : err => {
        console.log(err)
      },
      complete:() => {
        console.log('completed');
      }
    })
  }

}
