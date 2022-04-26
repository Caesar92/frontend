import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Vetement } from 'src/app/interfaces/vetement';
import { TokenStorageService } from 'src/app/services/security/token-storage.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  listVetement!: any;
  panierLenght: number = 0
  prixVetement: number = 0;
  prixLivraison: number = 2;
  prixTotal: number = 0;

  constructor(private token: TokenStorageService, private userService: UsersService) { }

  ngOnInit(): void {
    this.listVetement = sessionStorage.getItem('panier')
    if(this.listVetement){
      this.listVetement = JSON.parse(this.listVetement)
      this.panierLenght = this.listVetement.length
      this.calculerPrix()
    }
    // this.userService.getUser(this.token.getUser().id).subscribe({
    //   next: data => {this.user = data;},
    //   error: err => {console.log(err)},
    //   complete:() => {
    //     console.log(this.user.listVetement)
    //     console.log('completed');
    //   }
    // })
  }

  calculerPrix(){
    this.prixVetement = 0;
    for(let i = 0; i < this.listVetement.length ; i++){
      this.prixVetement += this.listVetement[i].prix
    }
    console.log(this.prixLivraison)
    this.prixTotal = this.prixVetement + this.prixLivraison
  }

  remove(id: number){
    console.log("COCUOU")
    let index;
    for(let i = 0; i < this.listVetement.length ; i++){
     if(this.listVetement[i].id == id)
      index = i
    }

    this.listVetement.splice(index, 1)
    sessionStorage.setItem('panier', JSON.stringify(this.listVetement))
    this.calculerPrix()
    this.panierLenght = this.listVetement.length
  }

}
