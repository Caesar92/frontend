import { Component, OnInit } from '@angular/core';
import { Vetement } from 'src/app/interfaces/vetement';
import { VetementsService } from 'src/app/services/vetements.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-vetement',
  templateUrl: './vetement.component.html',
  styleUrls: ['./vetement.component.css']
})
export class VetementComponent implements OnInit {
vetements : Vetement[] = []
genre!: string
  formValueFromSidebar: any;
  constructor(private vetementService : VetementsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params  => {
        this.genre = params['sexe'];
        this.vetementService.getVetementFilter(this.genre,0,100000,['S','M','L','XL'])
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
    )
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
