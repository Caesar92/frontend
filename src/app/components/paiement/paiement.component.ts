import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  form!: FormGroup;
  warningMessage: boolean = false;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required]),
      cardNumber: new FormControl('', [Validators.required]),
      experyDate: new FormControl('', [Validators.required]),
      cvv: new FormControl('', [Validators.required]),
    })
   }

   get name() { return this.form.get('name'); }
   get cardNumber() { return this.form.get('cardNumber'); }
   get experyDate() { return this.form.get('experyDate'); }
   get cvv() { return this.form.get('cvv'); }

  ngOnInit(): void {
  }

  onSubmit(){}

}
