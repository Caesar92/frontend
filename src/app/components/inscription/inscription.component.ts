import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/security/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

    form!: FormGroup;
    warningMessage: boolean = false;
  
    constructor(formBuilder: FormBuilder, private authService: AuthService, private route :Router) {
      this.form = formBuilder.group({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        prenom: new FormControl('', [Validators.required]),
        nom: new FormControl('', [Validators.required]),
        dateDeNaissance: new FormControl('', [Validators.required]),
        adresse: new FormControl('', [Validators.required]),
        codePostal: new FormControl('', [Validators.required]),
        ville: new FormControl('', [Validators.required]),
        pays: new FormControl('', [Validators.required]),
      })
     }
  
     get email() { return this.form.get('email'); }
     get password() { return this.form.get('password'); }
     get prenom() { return this.form.get('prenom'); }
     get nom() { return this.form.get('nom'); }
     get dateDeNaissance() { return this.form.get('dateDeNaissance'); }
     get adresse() { return this.form.get('adresse'); }
     get codePostal() { return this.form.get('codePostal'); }
     get ville() { return this.form.get('ville'); }
     get pays() { return this.form.get('pays'); }
  
    ngOnInit(): void {
    }
  
    onSubmit(){

      console.log("TOTO")

      this.authService.register(
        this.email?.value, this.password?.value, 
        this.prenom?.value, this.nom?.value, this.dateDeNaissance?.value,
        this.adresse?.value, this.codePostal?.value, this.ville?.value, this.password?.value
      ).subscribe({
        next: data => {
          this.route.navigate(['connexion'])
        },
        error: err => {
          console.log(err.error.message);
          this.warningMessage = true;
        },
      });
    }
  
  }
