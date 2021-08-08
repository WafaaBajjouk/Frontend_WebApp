import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RhComponent } from './rh/rh.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RoutingModule } from 'angular-routing';
import { CommonModule } from '@angular/common';
import { ComptaComponent } from './compta/compta.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ClientComponent } from './client/client.component';
import { AchatComponent } from './achat/achat.component';
import { ServiceComponent } from './service/service.component';
import { EshopComponent } from './eshop/eshop.component';
import { HomeclientComponent } from './homeclient/homeclient.component';
import { StoreComponent } from './store/store.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { PanierComponent } from './panier/panier.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { CommandesComponent } from './commandes/commandes.component';
import { ValiderComponent } from './valider/valider.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    RhComponent,
    ComptaComponent,
    FournisseurComponent,
    ClientComponent,
    AchatComponent,
    ServiceComponent,
    EshopComponent,
    HomeclientComponent,
    StoreComponent,
    ViewproductComponent,
    PanierComponent,
    ProductComponent,
    ContactComponent,
    CommandesComponent,
    ValiderComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,

    ReactiveFormsModule,
    MatButtonModule,
    RoutingModule.forRoot(),
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]


}

)

export class AppModule { }

