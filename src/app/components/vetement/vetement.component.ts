import { Component, OnInit } from '@angular/core';
import { Vetement } from 'src/app/interfaces/vetement';
import { VetementsService } from 'src/app/services/vetements.service';

@Component({
  selector: 'app-vetement',
  templateUrl: './vetement.component.html',
  styleUrls: ['./vetement.component.css']
})
export class VetementComponent implements OnInit {
  vetements : Vetement[] = [];
  constructor(private vetementService: VetementsService) { }

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

}
