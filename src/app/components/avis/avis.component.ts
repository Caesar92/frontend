import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {VetementsService} from "../../services/vetements.service";
import {Avis} from "../../interfaces/avis";
import { ActivatedRoute, Route, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  form!: FormGroup;

  constructor(formBuilder: FormBuilder, private route: ActivatedRoute, private vetementService: VetementsService) {
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
    let avis : Avis = {
      id: 0, 
      note: this.notes?.value, 
      nomUser: this.titreAvis?.value, 
      commentaire: this.avis?.value
    }
    let id = this.route.snapshot.params['id']
    this.vetementService.addAvis(id,avis).subscribe({
      next:()=> {}, 
      error: err => {console.log(err)}
    });
  }
  get titreAvis(){ return this.form.get('titreAvis');}
  get avis(){ return this.form.get('avis');}
  get notes(){ return this.form.get('notes');}

}
