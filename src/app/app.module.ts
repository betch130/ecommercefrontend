import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CategorieComponent } from 'src/ecommerce/components/categorie/categorie.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TableModule} from 'primeng/table';
import { ClientComponent } from 'src/ecommerce/components/client/client.component';
import { CommandeComponent } from 'src/ecommerce/components/commande/commande.component';
import { LignecommandeComponent } from 'src/ecommerce/components/lignecommande/lignecommande.component';
import { PaiementComponent } from 'src/ecommerce/components/paiement/paiement.component';
import { ProduitComponent } from 'src/ecommerce/components/produit/produit.component';

import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    ClientComponent,
    CommandeComponent,
    LignecommandeComponent,
    PaiementComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    InputTextModule,
    HttpClientModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
