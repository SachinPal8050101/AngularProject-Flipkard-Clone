import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-oder-confirm',
  templateUrl: './oder-confirm.component.html',
  styleUrls: ['./oder-confirm.component.scss']
})
export class OderConfirmComponent implements OnInit {

  totalItem: any;

  constructor(private cardService:CartService,private orderService:OrderServiceService ) { }

  ngOnInit(): void {
    this.orderService.getOrderedProducts()
    .subscribe((res: any)=>{
      console.log('res--->>>>',res)
      this.totalItem = res;
    })

    this.cardService.removeAllCart()
  }

}
