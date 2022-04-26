import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {VetementsService} from "../../services/vetements.service";
import {Avis} from "../../interfaces/avis";

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  form!: FormGroup;

  constructor(formBuilder: FormBuilder, private vetementService: VetementsService) {
    this.form = formBuilder.group({
      notes: new FormControl('', [Validators.required]),
      titreAvis: new FormControl('',[Validators.required]),
      avis: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(
      this.notes?.value,
      this.titreAvis?.value,
      this.avis?.value
    )
    let avis : Avis = {id:1, note:this.notes?.value, nomUser: this.titreAvis?.value, commentaire: this.avis?.value}
    this.vetementService.addAvis(2,avis).subscribe({next:()=> {}, error: err => {console.log(err)}});
  }
  get titreAvis(){ return this.form.get('titreAvis');}
  get avis(){ return this.form.get('avis');}
  get notes(){ return this.form.get('notes');}

}
