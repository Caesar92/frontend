import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AvisComponent } from './components/avis/avis.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { DetailVetementComponent } from './components/detail-vetement/detail-vetement.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { PanierComponent } from './components/panier/panier.component';
import { ValidationCommandeComponent } from './components/validation-commande/validation-commande.component';
import { VetementComponent } from './components/vetement/vetement.component';

const routes: Routes = [
  {path:"accueil", component: AccueilComponent},
  {path:"connexion", component:ConnexionComponent},
  {path:"inscription", component: InscriptionComponent},
  {path:"paiement", component:PaiementComponent},
  {path:"panier", component:PanierComponent},
  {path:"validation", component:ValidationCommandeComponent},
  {path:"vetement", component:VetementComponent},
  {path:"vetement/:id", component: DetailVetementComponent},
  {path:"avis/:id", component: AvisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
