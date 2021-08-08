import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public achats: Produit[];
  public editAchat: Produit;
  public deleteAchat: Produit;

  productss: Array<Produit>;
  productsRecieved: Array<Produit>;

  cartProducts: any;

  constructor(private productService: ProductService) { }



  ngOnInit(): void {
    this.invokeStripe();

    this.cartProducts = [];
    localStorage.clear();
    this.getEshop();
     //from localstorage retrieve the cart item
     let data = localStorage.getItem('cart');
     //if this is not null convert it to JSON else initialize it as empty
     if (data !== null) {
       this.cartProducts = JSON.parse(data);
     } else {
       this.cartProducts = [];
     }
  }


  public getEshop(): void {
    this.productService.getEshop().subscribe(
      (response: Produit[]) => {
        this.achats = response;
        console.log(this.achats);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addToCart(bookId: any) {
    let book = this.achats.find(book => {
      return parseInt(book.ref) === +bookId;
    });
    let cartData = [];
    let data = localStorage.getItem('cart');
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    cartData.push(book);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    book!.isAdded = true;
  }
  updateCartData(cartData: any) {
    this.cartProducts = cartData;
  }

   goToCart() {
  //   this.router.navigate(['/cart']);
   }

  emptyCart() {
    this.cartProducts = [];
    localStorage.clear();
  }

  paymentHandler:any = null;



  makePayment(amount:any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Stripe token generated!');
      }
    });

    paymentHandler.open({
      name: 'Positronx',
      description: '3 widgets',
      amount: amount * 100
    });
  }

  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }

      window.document.body.appendChild(script);
    }
  }
}
