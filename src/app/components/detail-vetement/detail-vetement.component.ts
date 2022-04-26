import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Vetement } from 'src/app/interfaces/vetement';
import { VetementsService } from 'src/app/services/vetements.service';

@Component({
  selector: 'app-detail-vetement',
  templateUrl: './detail-vetement.component.html',
  styleUrls: ['./detail-vetement.component.css']
})
export class DetailVetementComponent implements OnInit {
  vetement!: Vetement 
   


  constructor(private vetementService: VetementsService, private route: ActivatedRoute) { }
 

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        let id = Number(params.get('id') || 0 )
        this.vetementService.getDetailVetement(id)
        .subscribe({
          next: vetement => {
            console.log(vetement)
            this.vetement = vetement;
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

 

}
