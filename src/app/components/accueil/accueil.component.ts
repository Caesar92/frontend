import { Component, OnInit } from '@angular/core';
import { VetementsService } from 'src/app/services/vetements.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  vetements : any[] = [];

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
