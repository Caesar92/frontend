import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Vetement } from 'src/app/interfaces/vetement';
import { TokenStorageService } from 'src/app/services/security/token-storage.service';
import { StockService } from 'src/app/services/stock.service';
import { UsersService } from 'src/app/services/users.service';
import { VetementsService } from 'src/app/services/vetements.service';

@Component({
  selector: 'app-detail-vetement',
  templateUrl: './detail-vetement.component.html',
  styleUrls: ['./detail-vetement.component.css']
})
export class DetailVetementComponent implements OnInit {
  vetement!: Vetement 
  taille: string = '';
   
  constructor(
    private vetementService: VetementsService, 
    private route: ActivatedRoute,
    private token: TokenStorageService,
    private userService: UsersService,
    private stockService: StockService) { }
 
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

  changeTaille(id: string){
    this.taille = id;
  }

  addToBasket(){
    /*let userId = this.token.getUser().id
    let vetementId = this.vetement.id
    this.userService.addVetementToPanier(userId, vetementId).subscribe({
      next: () => {},
      error: err => {console.log(err)}
    })

    this.stockService.decreaseStock(this.stockId).subscribe({
      next: () => {},
      error: err => {console.log(err)}
    })*/
    var vetements: any = sessionStorage.getItem('panier')
    if(!vetements){
      vetements = []
    }else{
      vetements = JSON.parse(vetements)
    }


    vetements.push({
      id: this.vetement.id,
      prix: this.vetement.price,
      photo: this.vetement.photo,
      couleur: this.vetement.couleur,
      intitule: this.vetement.intitule,
      marque: this.vetement.marque,
      taille: this.taille
    })

    console.log("APRES AJOUT")
    console.log(vetements)

    sessionStorage.setItem("panier", JSON.stringify(vetements))
  }
}
