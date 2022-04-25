import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/security/auth.service';
import { TokenStorageService } from 'src/app/services/security/token-storage.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  form!: FormGroup;
  warningMessage: boolean = false;
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private route :Router, formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
   }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.route.navigate(['accueil'])
    }
  }

  onSubmit() {
    this.authService.login(this.email?.value, this.password?.value).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        console.log(err.error.message);
        this.warningMessage = true;
      },
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

}
