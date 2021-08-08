import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RhComponent } from './rh/rh.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ComptaComponent } from './compta/compta.component';
import { AchatComponent } from './achat/achat.component';
import { ServiceComponent } from './service/service.component';
import { ClientComponent } from './client/client.component';
import { EshopComponent } from './eshop/eshop.component';
import {HomeclientComponent} from './homeclient/homeclient.component';
import {ProductComponent} from './product/product.component';
import {ContactComponent} from './contact/contact.component';
import { CommandesComponent } from './commandes/commandes.component';
import { ValiderComponent } from './valider/valider.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path :'rh',component:RhComponent},
  {path :'service',component:ServiceComponent},
  {path :'fournisseur',component:FournisseurComponent},
  {path :'achat',component:AchatComponent},
  {path :'compta',component:ComptaComponent},
  {path :'vente',component:ClientComponent},
  {path :'eshop',component:EshopComponent},
  {path :'homeclient',component:HomeclientComponent},

  {path :'product',component:ProductComponent},
  {path :'commande',component:CommandesComponent},
  {path :'valider',component:ValiderComponent},
  {path :'contact',component:ContactComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
