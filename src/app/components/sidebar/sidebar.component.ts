import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  genre! : String
  @Output()
  unEvenement = new EventEmitter();

  TAILLES_LIST = [
    {id: 1, label: 'S', checked: false},
    {id: 2, label: 'M', checked: false},
    {id: 3, label: 'L', checked: false},
    {id: 4, label: 'XL', checked: false}
  ]

  form!: FormGroup
  constructor(formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(
      params  => {
        this.genre = params['sexe'];
      }
    )
    this.form = formBuilder.group({
      sexe: new FormControl(this.genre),
      prix: new FormControl(''),
      tailles: new FormArray([])
    })

    this.addCheckboxesToForm()

  }

  private addCheckboxesToForm() {
    this.TAILLES_LIST.forEach(() => this.taillesFormArray.push(new FormControl(false)));
  }

  get sexe() { return this.form.get('sexe')}
  get prix() { return this.form.get('prix'); }
  get tailles() { return this.form.get('tailles'); }
  get taillesFormArray() { return this.form.get('tailles') as FormArray }


  ngOnInit(): void {
    
    this.form.value.tailles
      .map((checked: boolean, i: number) => checked ? this.TAILLES_LIST[i].id : null)
      .filter((v: any) => v !== null);
      this.unEvenement.emit(this.parseDataForm())
  }

  parseDataForm() {
    let sexe: string | null; 
    let min: number | null;
    let max: number | null;
    let taille: string[] | null = [];

    if(this.sexe?.value == null || this.sexe?.value == ''){
      sexe = null
    }
    else {
      sexe = this.sexe.value
    }

    if(this.prix?.value == null || this.prix?.value == ''){
      min = null;
      max = null;
    }else{
      min = this.prix?.value.split("-")[0];
      max = this.prix?.value.split("-")[1];
    }

    for(let i = 0; i < this.tailles?.value.length; i++){
      if(this.tailles?.value[i]){
        taille?.push(this.TAILLES_LIST[i].label)
      }
    }
    if(taille.length == 0){
      taille = null;
    }
    return {sexe:sexe, min:min, max:max, taille: taille}
  }

  onSubmit(): void {
    this.unEvenement.emit(this.parseDataForm())
  }

}
