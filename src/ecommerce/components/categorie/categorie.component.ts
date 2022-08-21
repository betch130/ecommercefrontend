import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categorie } from 'src/ecommerce/models/categorie';
import { CategorieServiceService } from 'src/ecommerce/services/categorie-service.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  categories?:Categorie[];
  loading=true
  categorie?:Categorie
  displayPosition=false

  //Formulaire demander moi plus tard si vous ne comprenez pas
  catForm!: FormGroup;

  constructor(private categorieService:CategorieServiceService,
    private fb: FormBuilder,
    ) {
    this.getAll()

    this.catForm = this.fb.group({
      libelle: [null, Validators.required]
    });

  }

  ngOnInit(): void {

  }

  getAll(){
    this.categorieService.getAll().subscribe(datas=>{
      this.categorie=undefined
      console.log(datas,'avant map');
      console.log(datas.map(x=>x.id),'apres map');
      this.loading=false
      this.categories=datas;
    })
  }


  save(){

    this.categorie={id:this.categorie?.id,libelle:this.catForm.value.libelle}

    if(!this.categorie.id)
      this.categorieService.save(this.categorie!).subscribe(()=> {this.getAll();this.displayPosition=false})
    else
      this.categorieService.update(this.categorie!).subscribe(()=> {this.getAll();this.displayPosition=false})
  }

  delete(id:number){
    this.categorieService.delete(id).subscribe(()=>{
      this.getAll()
    })
  }


  showModal(data:Categorie){
    this.displayPosition=true
    this.categorie=data;
  }


  get formValues() { return this.catForm.controls; }

}
