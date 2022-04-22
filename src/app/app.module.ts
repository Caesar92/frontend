import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { PanierComponent } from './components/panier/panier.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { ValidationCommandeComponent } from './components/validation-commande/validation-commande.component';
import { VetementComponent } from './components/vetement/vetement.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DetailVetementComponent } from './components/detail-vetement/detail-vetement.component';

import { authInterceptorProviders  } from './interceptors/auth.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConnexionComponent,
    PanierComponent,
    PaiementComponent,
    ValidationCommandeComponent,
    VetementComponent,
    NavbarComponent,
    SidebarComponent,
    DetailVetementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    authInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
