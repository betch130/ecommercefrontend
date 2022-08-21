import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from 'src/ecommerce/components/categorie/categorie.component';
import { ClientComponent } from 'src/ecommerce/components/client/client.component';
import { CommandeComponent } from 'src/ecommerce/components/commande/commande.component';
import { LignecommandeComponent } from 'src/ecommerce/components/lignecommande/lignecommande.component';
import { PaiementComponent } from 'src/ecommerce/components/paiement/paiement.component';
import { ProduitComponent } from 'src/ecommerce/components/produit/produit.component';

const routes: Routes = [
  {
    path:"categorie",
    component:CategorieComponent
  },
  {
    path:"client",
    component:ClientComponent
  },
  {
    path:"commande",
    component:CommandeComponent
  },
  {
    path:"ligne",
    component:LignecommandeComponent
  },
  {
    path:"paiement",
    component:PaiementComponent
  },
  {
    path:"produit",
    component:ProduitComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
