import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  form!: FormGroup;
  warningMessage: boolean = false;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
   }



  ngOnInit(): void {
  }

  onSubmit() {

    this.warningMessage = true;
    console.log(this.form.value)
  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

}
