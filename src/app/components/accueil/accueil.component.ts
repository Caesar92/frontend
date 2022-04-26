import { Component, OnInit } from '@angular/core';
import { VetementsService } from 'src/app/services/vetements.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  vetementFemme : any[] = [];
  vetementUnisexe : any[] = [];

  constructor(private vetementService: VetementsService) { }

  ngOnInit(): void {
    this.getVetementFemme(), this.getVetementUnisexe()
  }
getVetementFemme(){
  this.vetementService.getVetementFilter('Femme',0,100000,['S','M','L','XL'])
  .subscribe({
    next: vetements => {
      this.vetementFemme = vetements;
    },
    error : err => {
      console.log(err)
    },
    complete:() => {
      console.log('completed');
    }
  })
}

getVetementUnisexe(){
  this.vetementService.getVetementFilter('Unisexe',0,100000,['S','M','L','XL'])
  .subscribe({
    next: vetements => {
      this.vetementUnisexe = vetements;
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
