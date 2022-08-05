import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { LoadingService } from 'src/app/service/loading.service';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public grandTotal !: number;
  public productList : any ;

  constructor(private loderService:LoadingService,private cardservice:CartService  ,private router:Router,private orderService:OrderServiceService) { }

  ngOnInit(): void {
       this.grandTotal=this.cardservice.getTotalPrice()
       this.cardservice.getProducts().subscribe((res)=>this.productList=res)
  }

   form = new FormGroup({
    card_owner_name: new FormControl(),
    card_disits: new FormControl(),
    expiry_date: new FormControl(),
    expiry_year: new FormControl()
  });

  onSubmit(){
   console.log( 'valid--->>>',this.form.valid)
   if(this.form.valid){
    this.loderService.show() 
    setTimeout(()=>{
      this.loderService.hide()
      console.log('this.proi--->>',this.productList)
      this.orderService.setOrderedProduct(this.productList)
      this.router.navigate(['/cart/checkout/orderDone'],{state:{data:"abcd"}})

    },5000) 
  }  
}
}
