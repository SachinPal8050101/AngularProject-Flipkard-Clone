import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  public productOrdered : any =[]
  public productList = new BehaviorSubject<any>([]);

  

  constructor() { }
  getOrderedProducts(){
    return this.productList.asObservable();
  }
  setOrderedProduct(product : any){
    this.productOrdered.push(...product);
    this.productList.next(this.productOrdered)
  }

}
